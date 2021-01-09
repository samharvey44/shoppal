import Cupboard from "../services/cupboard";

/**
 * Are we debugging?
 *
 * @var {boolean}
 */
export const DEBUG: boolean = true;

/**
 * Our cupboard instance.
 *
 * @var {Cupboard}
 */
export const cupboard: Cupboard = new Cupboard("herobattle", {
    auth: null,
});

/**
 * Our API params.
 *
 * @var {any}
 */
export const API = {
    SERVER: window.location.origin,
    PREFIX: `/api`,
    AUTH: {
        PREFIX: `oauth/token`,
        PARAMS: {
            grant_type: "password",
            client_id: 2,
            client_secret: document.querySelector<HTMLMetaElement>(
                'meta[name="client-secret"]'
            )?.content,
        },
    },
};
