import Vue from "vue";
import globalProperties from "@processmaker/spark-screen-builder/src/global-properties";
import FileDownload from "./components/file-download";
import FileUpload from "./components/form/file-upload";

import {
    renderer,
} from "@processmaker/spark-screen-builder";
import initialControls from "@processmaker/spark-screen-builder/src/form-builder-controls";
import VueFormElements from "@processmaker/vue-form-elements";
const FormText = renderer.FormText;

Vue.use(VueFormElements);

Vue.component("FileUpload", FileUpload);
Vue.component("FileDownload", FileDownload);

initialControls.push({
    rendererComponent: FileUpload,
    rendererBinding: "FileUpload",
    builderComponent: FileUpload,
    builderBinding: "FileUpload",
    control: {
        label: "File Upload",
        component: "FileUpload",
        "editor-component": "FileUpload",
        "fa-icon": "fas fa-file-upload",
        config: {
            label: "New File Upload"
        },
        inspector: [{
            type: "FormInput",
            field: "label",
            config: {
                label: "Text Label",
                helper: "The text to display"
            }
        },
        {
            type: "FormInput",
            field: "name",
            config: {
                label: "Upload Name",
                helper: "The name of the upload"
            }
        }
        ]
    }
});
initialControls.push({
    rendererComponent: FormText,
    rendererBinding: "FormText",
    builderComponent: FileDownload,
    builderBinding: "FileDownload",
    control: {
        label: "File Download",
        component: "FileDownload",
        "editor-component": "FormText",
        "fa-icon": "fas fa-file-download",
        config: {
            label: "New File Download"
        },
        inspector: [{
            type: "FormInput",
            field: "label",
            config: {
                label: "Text Label",
                helper: "The text to display"
            }
        },
        {
            type: "FormInput",
            field: "name",
            config: {
                label: "Download Name",
                helper: "The name of the Download"
            }
        }
        ]
    }
});

ProcessMaker.EventBus.$on("screen-builder-init", (manager) => {
    for (let i = 0; i < initialControls.length; i++) {
        // Load of additional properties for inspector
        Array.prototype.push.apply(initialControls[i].control.inspector, globalProperties[0].inspector);
        manager.addControl(
            initialControls[i].control,
            initialControls[i].rendererComponent,
            initialControls[i].rendererBinding,
            initialControls[i].builderComponent,
            initialControls[i].builderBinding
        );
    }

    // Validations for field names
    for (let i = 0; i < initialControls.length; i++) {
        let item = initialControls[i];

        if (item.control === undefined || item.control.inspector === undefined) {
            continue;
        }

        for (let j = 0; j < item.control.inspector.length; j++) {
            let config = item.control.inspector[j].config;
            if (config.label === 'Field Name') {
                config.validation = 'regex:/^(?:[A-Z_a-z])(?:[0-9A-Z_a-z])*$/|required';
            }
        }
    }
});
