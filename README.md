[![Known Vulnerabilities](https://snyk.io//test/github/notarise-gov-sg/email-template-generator/badge.svg?targetFile=package.json)](https://snyk.io//test/github/notarise-gov-sg/email-template-generator?targetFile=package.json)
[![GitHub issues](https://img.shields.io/github/issues/notarise-gov-sg/email-template-generator)](https://github.com/notarise-gov-sg/email-template-generator/issues)
[![License](https://img.shields.io/github/license/notarise-gov-sg/email-template-generator)](https://github.com/Notarise-gov-sg/email-template-generator/blob/master/LICENSE)

# Generate Notarise email templates

A helper library for generate Notarise email templates.

## Getting Started

```bash
npm i @notarise-gov-sg/email-template-generator
```

Add this to ignore the transformation of export html templates in `jest.config`

```json
transformIgnorePatterns: ["/node_modules/(?!@notarise-gov-sg/email-template-generator)"]
```

### Import & use require template

```javascript
import emailTemplates from "@notarise-gov-sg/email-template-generator";

emailTemplates.multiQrVacCertHtml // for vaccination cert template
emailTemplates.multiQrRecCertHtml // for recovery cert template

```

# Generate new responsive email templates

Generate responsive email templates using [maizzle plugin](https://maizzle.com/docs/installation/)

1. Generate production use email templates [healthcert-templates](https://github.com/Notarise-gov-sg/email-template-generator/emailTemplates)

```
npm run maizzle:build-prod
```

This command will generate responsive email templates at here `./src/emailTemplates`.

2. Generate developement use email templates

```
// debug email templates
npm run maizzle:watch

// generate development build
npm run maizzle:build
```

This command will generate responsive local build email templates at here `./maizzle/build_local`.
