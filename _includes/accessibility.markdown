
## Accessibility

1. Semantic HTML. Use `hN` for headings, `p` for paragraphs, `ul`/`ol`s for lists and so on. Beware of [document outline](https://developer.mozilla.org/en-US/docs/Web/HTML/Sections_and_Outlines_of_an_HTML5_document)!
    * A simple way to test this is to disable css using The Web Developer plugin ([firefox](https://addons.mozilla.org/en-US/firefox/addon/web-developer/), [chrome](https://chrome.google.com/webstore/detail/web-developer/bfbameneiokkgbdmiekhjnmfkcnldhhm?hl=en))
1. Progressive enhancement: Major functionality like main navigation and search should work without JavaScript or Flash
1. All content should be accessible by keyboard
    * [Creating logical tab order with `tabindex`](http://www.w3.org/WAI/GL/wiki/Creating_Logical_Tab_Order_with_the_Tabindex_Attribute)
    * Remember to style `:focus`
1. Alternative text for images
    * [Writing good alt text](http://www.456bereastreet.com/archive/200811/writing_good_alt_text/)
1. Color contrast should at least pass [WCAG AA](http://www.w3.org/TR/WCAG/#visual-audio-contrast-contrast) (AAA for mobile)
    * [Contrast ratio tool](http://leaverou.github.io/contrast-ratio/)
1. Links should differentiate from normal text, either by underline or weight
    * Don't use underlined text for anything else than links
1. Language should be declared
    * Example: `<html lang="nb">`
    * [Codes for the Representation of Names of Languages](http://www.loc.gov/standards/iso639-2/php/code_list.php). Use ISO 639-1 column.
1. Use [HTML5 input types](http://html5doctor.com/html5-forms-input-types/)
1. Add print stylesheet
    * A good start could be to look at [HTML5 Boilerplates print styles](https://github.com/h5bp/html5-boilerplate/blob/v4.2.0/doc/css.md#print-styles)
1. Validate documents
    * [http://validator.w3.org/](http://validator.w3.org/)
    * For multiple pages: [eGovMon PageCheck](http://accessibility.egovmon.no/en/pagecheck2.0/)
1. Add video captions
    * [HTML5 video captions](http://www.3playmedia.com/how-it-works/how-to-guides/html5-video-captioning/)
    * [YouTube captions](https://support.google.com/youtube/answer/2734705?hl=en&ref_topic=2734696)