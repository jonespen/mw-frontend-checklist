
## Accessibility

1. Semantic HTML. Use h*n* for headings, p for paragraphs, ul/ols for lists and so on. Beware of [document outline](https://developer.mozilla.org/en-US/docs/Web/HTML/Sections_and_Outlines_of_an_HTML5_document)!
    * A simple way to test this is to disable css using The Web Developer plugin ([firefox](https://addons.mozilla.org/en-US/firefox/addon/web-developer/), [chrome](https://chrome.google.com/webstore/detail/web-developer/bfbameneiokkgbdmiekhjnmfkcnldhhm?hl=en))
1. Progressive enhancement: Major functionality like main navigation and search should work without js or flash
1. All content should be accessible by keyboard
    * Remember to style :focus
1. Alternative text for images
1. Color contrast, should at least pass [WCAG AA](http://www.w3.org/TR/WCAG/#visual-audio-contrast-contrast) (AAA for mobile?)
    * [Contrast ratio tool](http://leaverou.github.io/contrast-ratio/)
1. Links should differentiate from normal text, either by underline or weight
1. Language should be declared
    * Example: <html lang="nb”>
    * [Codes for the Representation of Names of Languages](http://www.loc.gov/standards/iso639-2/php/code_list.php). Use ISO 639-1 column.
1. Use [HTML5 input types](http://html5doctor.com/html5-forms-input-types/)
1. Add print stylesheet
1. Validate documents
    * [http://validator.w3.org/](http://validator.w3.org/)
    * For multiple pages: [eGovMon PageCheck](http://accessibility.egovmon.no/en/pagecheck2.0/)
