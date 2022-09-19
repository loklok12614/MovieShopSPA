export interface User {
    nameid:      string;
    email:       string;
    family_name: string;
    given_name:  string;
    Country:     string;
    Language:    string;
    isAdmin:     string;
    nbf:         number;
    exp:         number;
    iat:         number;
    iss:         string;
    aud:         string;
}
