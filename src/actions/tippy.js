import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";

export default function(node, options) {
   const instance = tippy(node, options);

    return {
        update(newOtions) {
            // @ts-ignore
            instance.setProps(newOtions);
        },
        destroy(){
            // @ts-ignore
            instance.destroy();
        }
    }
}