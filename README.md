## autoHegihtAccordion

A custom accordion widget which takes auto height for individual active elements

### Calling notification 
```javascript
  $(".class/#id").autoHegihtAccordion({
    accordionHeader: 'accordion-header',
    accordionContent: 'accordion-content',
    accordionActive: 'current-open-content',
    extraHeadingEl:'accordion-header',
    isExtraHeading: false,
    autoHeight: true,
    activeItem: 1
  });
```
  
### Defaults Options
  
Options                           | Default Value                 | Description                               
 --------------------------------- |-----------------------------| -----------------------------------------
 accordionContent                  | accordion-content           | This is class in which content will be wrapped           
 accordionHeader                   | accordion-header            | Default class name for accordion header                    
 accordionActive                   | current-open-content        | Default class name of that elment for active/opned on load                            
 accordionParentHeight             | -- | Need to provide the parent class name, so it plugin can maniplaute the auto height for other blocks.
 autoHeight                        | `true`                      | Can be set to false if equal height is not require.
 activeItem                        | 1  | Active item counts on page load
 isExtraHeading                    | false | Can place a extra heading inside accoridan in that case, it needs to be set as `true`
 extraHeadingEl                    | --    | Need to provide the class of that extra element 
 fixedHeight                       | `false`                     |   `true` if auto height is not requre.

###  [SEE IT IN ACTION - DEMO](http://codepen.io/saorabhkr/pen/QGXERv)
 
####Simple HTML structure.
```javascript
 <div class="container">
  <div class="tool-outer-wrapper">
    <div class="secCustomBlock">
      <ul class="sec-custom-list accordion-nav">
        <li>
          <div class="accordion-header current-open-content">
            <div class="sec-accordion-number accordion-number selected">1</div>
            <span class="circular-medium">Header One</span>
            <div class="rightTringle"></div>
          </div>
          <div class="accordion-content sec-custom-content">
            Lorem Ipsum 
          </div>
        </li>
        <li>
          <div class="accordion-header sec-custom-header-el">
            <div class="sec-accordion-number accordion-number">2</div>
            <span class="circular-medium">Header Two</span>
            <div class="rightTringle"></div>
          </div>
          <div class="accordion-content sec-custom-content">
            Lorem Ipsum
          </div>
        </li>
      </ul>
    </div>
  </div>
</div> 
```
