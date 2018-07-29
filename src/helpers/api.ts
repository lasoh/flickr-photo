import {environment} from "../environments/environment";

export const apiUrl = (uri?: string): string => {
    return environment.flicker.api_url;
};
