/**
 * Utilties
 */

// export default for holding the Vue reference
const exports = {}
export default exports


/**
 * warn
 *
 * @param {String} msg
 * @param {Error} [err]
 *
 */

export function warn (msg, err) {
  if (window.console) {
    console.warn('[vue-i18n] ' + msg)
    if (err) {
      console.warn(err.stack)
    }
  }
}