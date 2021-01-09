export const toFormData = (data: any, stringifyNested = true) =>
    Object.entries(data).reduce((acc, [key, value]) => {
        const convertValue = (v: any, stringifyObjects = false) => {
            // Form data casts `null` as a string.
            if (v === null) {
                return "";
            }

            if (typeof v === "object") {
                if (stringifyObjects) {
                    return JSON.stringify(v);
                }
            }

            if (v !== true && v !== false) {
                return v;
            }

            return v === true ? 1 : 0;
        };

        if (Array.isArray(value)) {
            value.forEach((v) => {
                acc.append(`${key}[]`, convertValue(v, stringifyNested));
            });
        } else if (value !== undefined) {
            acc.append(key, convertValue(value));
        }

        return acc;
    }, new FormData());
