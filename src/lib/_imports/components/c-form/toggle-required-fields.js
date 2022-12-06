/** To toggle required attribute (and classes) of fields (and field wrappers) */

/**
 * @constant
 * @default
 * @type {object.<string,*>}
 */
 const DEFAULT_CLASS_NAMES = {
  errorList: null,
  jsIs: 'js-is-required',
  jsNot: 'js-not-required'
};

/**
 * @constant
 * @default
 * @type {object.<string,*>}
 */
 const DEFAULT_OPTIONS = {
  shouldScrollToFirst: false
};

/**
 * Make a field NOT required (and update field wrapper accordingly)
 * @param {HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement} field
 * @param {string} wrapClassRequired - class on field's wrapper
 */
function unRequireField( field, classNames ) {
  const wrap = field.closest('.' +  classNames.wrap );

  field.required = false;
  field.classList.add( classNames.jsNot );
  field.classList.remove( classNames.jsIs );
  if ( wrap && classNames.wrapRequired ) {
    wrap.classList.remove( classNames.wrapRequired );
  }
}

/**
 * Make a field REQUIRED (and update field wrapper accordingly)
 * @param {HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement} field
 * @param {string} wrapClassRequired - class on field's wrapper
 */
function requireField( field, classNames ) {
  const wrap = field.closest('.' + classNames.wrap );

  field.required = true;
  field.classList.add( classNames.jsIs );
  field.classList.remove( classNames.jsNot );
  if ( wrap && classNames.wrapRequired ) {
    wrap.classList.add( classNames.wrapRequired );
  }
}

/**
 * Toggle required attribute (and classes) of fields (and field wrappers)
 * @param {Document|HTMLElement} [scope=document] - where to search for fields
 * @param {string} [wrapClass] - class on all field wrappers
 * @param {string} [wrapRequiredClass] - class on required fields' wrappers
 * @param {object.<string,*>} [opts]
 * @param {boolean} [opts.shouldScrollToFirst] - to scroll to first such field
 */
export default function toggleRequiredFields( scope = document, wrapClass, wrapRequiredClass, opts ) {
  const classNames = Object.assign( DEFAULT_CLASS_NAMES, {
    wrap: wrapClass,
    wrapRequired: wrapRequiredClass
  });
  const options = Object.assign( DEFAULT_OPTIONS, opts );
  const requiredFields = scope.querySelectorAll(`
    [required]:is(input, select, textarea),
    .` + classNames.jsNot + `
  `);

  [ ...requiredFields ].forEach( field => {
    if ( field.hasAttribute('required') ) {
      unRequireField( field, classNames );
    } else {
      requireField( field, classNames );
    }
  });

  if ( options.shouldScrollToFirst ) {
    requiredFields[0].scrollIntoView( false );
  }
}
