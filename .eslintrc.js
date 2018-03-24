module.exports = {
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "airbnb",
        "prettier",
        "prettier/react"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "jsx-a11y",
        "import",
        "prettier"
    ],
    "globals": {
        "__DEV__": true
    },
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-unused-vars": [
            "warn", 
            { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }
        ],
        "no-underscore-dangle": [
            "off",
        ],
        "no-use-before-define": [
            "off",
        ],
        "import/prefer-default-export": [
            "off",
        ],
        "react/prop-types": [
            "off",
        ],
        "react/jsx-filename-extension": [
            "warn", 
            { "extensions": [".js"] }
        ],
        "react/default-props-match-prop-types": [
            "off"
        ],
    }
};
