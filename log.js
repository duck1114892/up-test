export const error = 'error'
export const warn = 'warn'
export const logg = 'log'
function logger(log, type){
    console[type](log)
}
export default logger
