/* eslint-disable */

export default {
    install(app) {
        app.config.globalProperties.$trigger = (eventName, ...args) => {
            if ('mp' in window) mp.trigger(eventName, ...args)
            else console.log(`Trigger event ${eventName} - ${args}`)
        }

        app.config.globalProperties.$addEvent = (eventName, callback) => {
            if ('mp' in window) mp.events.add(eventName, callback)
            else console.log(`Add event ${eventName} - ${callback}`)
        }

        app.config.globalProperties.$removeEvent = (eventName) => {
            if ('mp' in window) mp.events.remove(eventName)
            else console.log(`Remove event ${eventName}`)
        }
    }
}
