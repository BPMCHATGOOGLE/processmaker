---
description: Understand each of Screen Builder's modes.
---

# Screen Builder Modes

## Design Mode

Use Design mode to design your ProcessMaker Screen. Design mode is the default mode when a ProcessMaker Screen is created or edited. While in Design mode, use the **Design** setting section to configure [controls](control-descriptions/) that you place into your Screen Builder canvas.

![Screen Builder in Design mode](../../../.gitbook/assets/screen-editor-design-mode-designer.png)

{% hint style="info" %}
### Learn How to Configure Controls

See [Control Descriptions and Inspector Settings](control-descriptions/).

### Learn How to Create a Multi-Page ProcessMaker Screen

See [Add a New Page to a Screen](add-a-new-page-to-a-screen.md).
{% endhint %}

## Preview Mode

Use Preview mode to view and test your ProcessMaker Screen. Test how your controls function as a form user would experience your Screen during a [Request](../../../using-processmaker/requests/what-is-a-request.md).

Furthermore, test how the ProcessMaker Screen's controls you configured in Design mode interact with JSON data models. ProcessMaker represents ProcessMaker Screens as JSON data models. You can view any JSON data model in Preview mode to test how a [Process's](../../viewing-processes/what-is-a-process.md) JSON data model or another ProcessMaker Screen's data model interacts with your Screen. Viewing the JSON data model can be helpful to see how values are entered into the ProcessMaker Screen as well as to use that JSON data model in your [ProcessMaker Scripts](../../scripts/what-is-a-script.md).

![Screen Builder in Preview mode](../../../.gitbook/assets/preview-mode-screen-builder-designer.png)

{% hint style="info" %}
 See [Preview a Screen and Its JSON Data Model](preview-a-screen.md).
{% endhint %}

## Calculated Properties Mode

Use Calculated Properties mode to add Calculated Properties to that ProcessMaker Screen. A Calculated Property is any value, mathematical calculation, or formula. A Calculated Property's determines its value either through a mathematical formula or valid JavaScript, and may include values from [ProcessMaker Screen control](control-descriptions/) values and [Magic Variables](../../reference-global-variables-in-your-processmaker-assets.md) during that [Request](../../../using-processmaker/requests/what-is-a-request.md). Likewise, a Calculated Property's value can display in a ProcessMaker Screen control during that Request. Calculated Properties can only be used within and only affect the ProcessMaker Screen to which the Calculated Property is defined.

![Configure the Calculated Properties for a ProcessMaker Screen in Calculated Properties mode](../../../.gitbook/assets/computed-properties-populated-screens-builder-processes.png)

{% hint style="info" %}
See [Manage Calculated Properties](manage-computed-properties/).
{% endhint %}

## Custom CSS Mode

Use the Custom CSS mode to add custom CSS styles to a ProcessMaker Screen.

{% hint style="info" %}
See [Add Custom CSS to a Screen](add-custom-css-to-a-screen.md).
{% endhint %}

## Watchers Mode

Use Watchers mode to add Watchers to that ProcessMaker Screen. During a [Request](../../../using-processmaker/requests/what-is-a-request.md) or while [previewing](screens-builder-modes.md#preview-mode) the ProcessMaker Screen, a Watcher monitors when the value of a control in that Screen changes or receives a value, acts upon a Data Connector or runs a [ProcessMaker Script](../../scripts/what-is-a-script.md) using that control's value, and then outputs its result to another Screen control.

![ProcessMaker Script runs when student ID is entered, then returns student name, in Watchers mode](../../../.gitbook/assets/watchers-screen-screens-builder-processes.png)

{% hint style="info" %}
See [Manage Watchers](manage-watchers/).
{% endhint %}

## Related Topics

{% page-ref page="what-is-screens-builder.md" %}

{% page-ref page="types-for-screens.md" %}

{% page-ref page="screens-builder-modes.md" %}

{% page-ref page="validate-your-screen.md" %}

{% page-ref page="control-descriptions/" %}

{% page-ref page="add-a-new-page-to-a-screen.md" %}

{% page-ref page="preview-a-screen.md" %}

{% page-ref page="manage-computed-properties/" %}

{% page-ref page="add-custom-css-to-a-screen.md" %}

{% page-ref page="manage-watchers/" %}

{% page-ref page="how-to-use-the-undo-and-redo-buttons-in-screen-builder.md" %}

{% page-ref page="save-a-screen.md" %}

{% page-ref page="best-practices.md" %}

{% page-ref page="../../scripts/what-is-a-script.md" %}

{% page-ref page="../../viewing-processes/what-is-a-process.md" %}

