# Tomorrow Minds Contact Form Setup

## Current Status
- Website repository: https://github.com/ivarvd-hldng/tomorrow-minds-website
- Netlify site: deployed at tomorrowminds.ai
- Contact form: Implemented and working with Netlify Forms
- Form name: 'tomorrow-minds-contact'

## Next Steps

### 1. Configure Email Notifications
- Target email: ivar@isoplanner.app
- Location in Netlify: Forms > tomorrow-minds-contact > Form notifications
- Required configuration:
  * Email From: noreply@tomorrow-minds.ai
  * Subject template: 'New contact form submission - Tomorrow Minds'
  * Email format: HTML

### 2. Remaining Website Tasks
- Add proper navigation for menu items
- Set up blog functionality
- Fix broken links in footer
- Add success message styling

### Technical Details

#### Contact Form Code Location
```
src/components/Website.jsx
```

#### Form Fields
- Name (required)
- Email (required)
- Message (required)
- Hidden fields:
  * form-name
  * bot-field (honeypot)

#### Current Form Configuration
```jsx
<form 
  name="tomorrow-minds-contact" 
  method="POST" 
  data-netlify="true"
  data-netlify-honeypot="bot-field"
  onSubmit={handleSubmit}
  className="space-y-4"
>
```

## Repository Structure
```
/src
  /components
    Website.jsx       // Main component with form implementation
  App.jsx
  main.jsx
```

## Notes
- Form submissions are handled client-side with success message
- Netlify Forms is configured and working
- First test submission successful
