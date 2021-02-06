import KeyboardReturnIcon from "@material-ui/icons/KeyboardReturn";
import CircularProgress from "@material-ui/core/CircularProgress";
import React, { useState, useCallback, useEffect } from "react";
import CardActionArea from "@material-ui/core/CardActionArea";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Slide from "@material-ui/core/Slide";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import { useSnackbar } from "notistack";

import { useGoBack, ellipsise } from "../../helpers";
import { IProduct } from "./interfaces";
import api from "../../services/api";

const Products = () => {
    const [products, setProducts] = useState([]);
    const { enqueueSnackbar } = useSnackbar();

    const [search, setSearch] = useState("");

    const theme = useTheme();
    const isTablet = useMediaQuery(theme.breakpoints.down("sm"));

    const goBack = useGoBack();

    const getProducts = useCallback(
        (s = "") => {
            api.get("/products", {
                params: {
                    search: s,
                },
            })
                .then(({ data: { data: d } }) => {
                    setProducts(d);
                })
                .catch(() => {
                    enqueueSnackbar("Failed to get products!", {
                        variant: "error",
                    });
                });
        },
        [enqueueSnackbar]
    );

    useEffect(() => {
        getProducts();
    }, [getProducts]);

    const handleFilter = () => {
        getProducts(search);
    };

    const handleSearchClear = () => {
        setSearch("");
        getProducts();
    };

    const handleSearch = (e: any) => {
        setSearch(e.target.value);
    };

    return (
        <Slide direction="right" in>
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
            >
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        {isTablet ? (
                            <Grid
                                container
                                direction="column"
                                justify="center"
                                alignItems="center"
                            >
                                <Button
                                    onClick={() => {
                                        goBack();
                                    }}
                                    startIcon={<KeyboardReturnIcon />}
                                    size="small"
                                    variant="contained"
                                    style={{
                                        outline: "none",
                                        marginTop: "3%",
                                        backgroundColor: "#fca10d",
                                    }}
                                >
                                    Return
                                </Button>
                            </Grid>
                        ) : (
                            <Button
                                onClick={() => {
                                    goBack();
                                }}
                                startIcon={<KeyboardReturnIcon />}
                                size="small"
                                variant="contained"
                                style={{
                                    outline: "none",
                                    marginLeft: "24px",
                                    marginTop: "1%",
                                    backgroundColor: "#fca10d",
                                }}
                            >
                                Return
                            </Button>
                        )}

                        <div
                            style={{
                                marginBottom: "5%",
                                padding: isTablet ? "18px" : "25px",
                            }}
                        >
                            <Grid
                                container
                                direction="column"
                                justify="center"
                                alignItems="center"
                            >
                                <div>
                                    <Button
                                        variant="contained"
                                        style={{
                                            backgroundColor: "#fca10d",
                                            outline: "none",
                                        }}
                                        size="large"
                                    >
                                        Create A Product
                                    </Button>
                                </div>

                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        width: isTablet ? "80%" : "40%",
                                        marginTop: "3%",
                                    }}
                                >
                                    <TextField
                                        value={search}
                                        onChange={handleSearch}
                                        label="Search product..."
                                        style={{ flex: "1" }}
                                    />
                                </div>

                                <div
                                    style={{
                                        display: "flex",
                                        width: "70%",
                                        marginTop: isTablet ? "3%" : "1%",
                                    }}
                                >
                                    <Grid
                                        container
                                        justify="center"
                                        alignItems="center"
                                    >
                                        <Button
                                            onClick={handleFilter}
                                            style={{
                                                height: "40px",
                                                width: "110px",
                                                outline: "none",
                                                backgroundColor: "#fca10d",
                                                marginRight: "1%",
                                            }}
                                            variant="contained"
                                        >
                                            Search
                                        </Button>
                                        <Button
                                            onClick={handleSearchClear}
                                            style={{
                                                height: "40px",
                                                width: "110px",
                                                outline: "none",
                                                backgroundColor: "#fca10d",
                                                marginLeft: "1%",
                                            }}
                                            variant="contained"
                                        >
                                            Clear
                                        </Button>
                                    </Grid>
                                </div>
                            </Grid>

                            <div
                                style={{
                                    marginTop: "3%",
                                    marginLeft: isTablet ? "7%" : "10%",
                                    marginRight: isTablet ? "7%" : "10%",
                                    marginBottom: "5%",
                                    padding: isTablet ? "18px" : "25px",
                                }}
                            >
                                <Grid
                                    container
                                    spacing={2}
                                    style={{ alignItems: "stretch" }}
                                >
                                    {products ? (
                                        products.map((product: IProduct) => {
                                            return (
                                                <Grid
                                                    item
                                                    xs={12}
                                                    md={6}
                                                    lg={3}
                                                    style={{
                                                        display: "flex",
                                                        flexWrap: "wrap",
                                                    }}
                                                    key={product.id}
                                                >
                                                    <Card
                                                        elevation={3}
                                                        style={{
                                                            padding: "10px",
                                                            width: "100%",
                                                        }}
                                                    >
                                                        <CardActionArea
                                                            style={{
                                                                outline: "none",
                                                            }}
                                                        >
                                                            <CardContent>
                                                                <Grid
                                                                    container
                                                                    direction="column"
                                                                    justify="center"
                                                                    alignItems="center"
                                                                    style={{
                                                                        overflowWrap:
                                                                            "anywhere",
                                                                        whiteSpace:
                                                                            "pre-line",
                                                                        textAlign:
                                                                            "center",
                                                                    }}
                                                                >
                                                                    <Typography variant="h6">
                                                                        {ellipsise(
                                                                            product.name,
                                                                            20
                                                                        )}
                                                                        {product.shop ||
                                                                        product.brand ||
                                                                        product.category ? (
                                                                            <React.Fragment>
                                                                                <hr />
                                                                            </React.Fragment>
                                                                        ) : null}
                                                                    </Typography>

                                                                    {product.shop ? (
                                                                        <Typography variant="subtitle1">
                                                                            {`Shop: ${product.shop.name}`}
                                                                        </Typography>
                                                                    ) : null}

                                                                    {product.brand ? (
                                                                        <Typography variant="subtitle1">
                                                                            {`Brand: ${product.brand.name}`}
                                                                        </Typography>
                                                                    ) : null}

                                                                    {product.category ? (
                                                                        <Typography variant="subtitle1">
                                                                            {`Category: ${product.category.name}`}
                                                                        </Typography>
                                                                    ) : null}
                                                                </Grid>
                                                            </CardContent>
                                                        </CardActionArea>
                                                    </Card>
                                                </Grid>
                                            );
                                        })
                                    ) : (
                                        <CircularProgress />
                                    )}
                                </Grid>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </Slide>
    );
};

export default Products;
