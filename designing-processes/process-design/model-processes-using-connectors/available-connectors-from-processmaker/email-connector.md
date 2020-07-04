---
description: Automatically send emails during Requests for a Process.
---

# Send Email Connector

## Overview

The Send Email [connector](../what-is-a-connector.md) is part of the [Email package](../../../../package-development-distribution/package-a-connector/email.md). When you add the Send Email connector to your Process model and then reference a ProcessMaker Screen for email body content, ProcessMaker can send emails during [Requests](../../../../using-processmaker/requests/what-is-a-request.md). The Send Email connector can email a specified email address when that Send Email connector triggers in a Request's workflow. The Send Email connector supports sending an email to only one email recipient.

{% hint style="info" %}
### ProcessMaker Package Required

The Send Email connector requires that the [Send Email package](../../../../package-development-distribution/package-a-connector/email.md) be installed in your ProcessMaker instance. The Send Email connector and the Send Email [package](../../../../package-development-distribution/first-topic.md) are not available in the ProcessMaker open-source edition. Contact [ProcessMaker Sales](mailto:sales@processmaker.com) or ask your ProcessMaker sales representative how the Send Email connector can be installed in your ProcessMaker instance.
{% endhint %}

The Send Email connector adds the following components to the ProcessMaker open-source edition:

* **Process Modeler:** The Send Email connector adds the **Send Email** connector below the BPMN 2.0 elements in the panel to the left of the Process Modeler canvas. See the following sections in this topic:
  * [Add a Send Email Connector to the Process Model](email-connector.md#add-a-send-email-control-to-the-process-model)
  * [Configure a Send Email Connector](email-connector.md#configure-a-send-email-control)
* **Screens Builder:** The Send Email connector adds a new ProcessMaker Screen type called Email. Select the **Email** Screen type when [creating a new ProcessMaker Screen](../../../scripts/manage-scripts/create-a-new-script.md#create-a-new-processmaker-script). See [Email Screen type](../../../design-forms/screens-builder/types-for-screens.md#email).

The email recipient's name and email address can be specified in one of the following ways when configuring the Send Email connector:

* Plain text
* A **Variable Name** setting value using mustache syntax, for example `{{ email_recipient }}` and `{{ email_address }}`, respectively
* A [ProcessMaker Magic Variable](../../../reference-global-variables-in-your-processmaker-assets.md) value, specifically `{{ _user.fullname }}` and `{{ _user.email }}`, respectively

## Package and Permissions Required

The Send Email connector requires that the [ProcessMaker Send Email package](../../../../package-development-distribution/package-a-connector/email.md) be installed in your ProcessMaker instance. The Send Email connector and the Send Email [package](../../../../package-development-distribution/first-topic.md) are not available in the ProcessMaker open-source edition. Contact [ProcessMaker Sales](https://www.processmaker.com/contact/) or ask your ProcessMaker sales representative how the Send Email connector can be installed in your ProcessMaker instance.

Furthermore, your ProcessMaker user account or group membership must have the following permissions to configure a Send Email connector to the Process model unless your user account has the **Make this user a Super Admin** setting selected:

* Processes: Edit Processes
* Processes: View Processes

See the [Process](../../../../processmaker-administration/permission-descriptions-for-users-and-groups.md#processes) permissions or ask your ProcessMaker Administrator for assistance.

## Add a Send Email Connector to the Process Model

{% hint style="info" %}
[A package and permissions are required to do this](email-connector.md#package-and-permissions-required).
{% endhint %}

Follow these steps to add a Send Email connector to the Process model:

1. [View your Processes](../../../viewing-processes/view-the-list-of-processes/view-your-processes.md#view-all-active-processes). The **Processes** page displays.
2. [Create a new Process](../../../viewing-processes/view-the-list-of-processes/create-a-process.md) or click the **Open Modeler** icon![](../../../../.gitbook/assets/open-modeler-edit-icon-processes-page-processes.png)to edit the selected Process model. Process Modeler displays.
3. Locate the **Send Email** connector in the **Elements and Connectors** palette that is to the left of the Process Modeler canvas. If the [**Hide Menus** button](../../navigate-around-your-process-model.md#maximize-the-process-modeler-canvas-view)![](../../../../.gitbook/assets/hide-menus-button-process-modeler-processes.png)is enabled, the **Elements and Connectors** palette displays the **Send Email** connector's icon![](../../../../.gitbook/assets/send-email-icon-process-modeler-processes.png). ![](../../../../.gitbook/assets/send-email-control-connector-bpmn-process-modeler-processes.png) 
4. Drag the connector into the Process model canvas where you want to place it. If a Pool element is in your Process model, the Send Email connector cannot be placed outside of the Pool element.

![Send Email connector](../../../../.gitbook/assets/send-email-control-connector-process-modeler-processes.png)

{% hint style="info" %}
After adding the Data Connector connector, consider adding either of the following Boundary-type Process model elements to design business solutions when your best-case scenarios don't happen:

* [Boundary Timer Event](../../model-your-process/add-and-configure-boundary-timer-event-elements.md#add-a-boundary-timer-event-element) element \([Don't know what that is?](../../model-your-process/process-modeling-element-descriptions.md#boundary-timer-event)\)
* [Boundary Error Event](../../model-your-process/add-and-configure-boundary-error-event-elements.md#add-a-boundary-error-event-element) element \([Don't know what that is?](../../model-your-process/process-modeling-element-descriptions.md#boundary-error-event)\)
* [Boundary Signal Event](../../model-your-process/add-and-configure-boundary-signal-event-elements.md) element \([Don't know what that is?](../../model-your-process/process-modeling-element-descriptions.md#boundary-signal-event)\)
{% endhint %}

After the Send Email connector is placed into the Process model, you may move it by dragging it to the new location.

{% hint style="warning" %}
Moving a Send Email connector has the following limitations in regards to the following Process model elements:

* **Pool element:** If the Send Email connector is inside of a [Pool](../../model-your-process/process-modeling-element-descriptions.md#pool) element, it cannot be moved outside of the Pool element. If you attempt to do so, Process Modeler places the Send Email connector inside the Pool element closest to where you attempt to move it.
* **Lane element:** If the Send Email connector is inside of a Lane element, it can be moved to another Lane element in the same Pool element. However, the Send Email connector cannot be moved outside of the Pool element.
{% endhint %}

## Copy a Send Email Connector

Copying a Send Email connector copies the original along with its current settings, making it easier and faster to continue designing without adding default elements or [connectors](../what-is-a-connector.md) with their default settings.

The copied Send Email connector displays below the original. Any [Sequence Flow](../../model-your-process/process-modeling-element-descriptions.md#sequence-flow) and/or [Message Flow](../../model-your-process/process-modeling-element-descriptions.md#message-flow) elements incoming to or outgoing from the original are not copied.

{% hint style="info" %}
[A package and permissions are required to do this](email-connector.md#package-and-permissions-required).
{% endhint %}

Follow these steps to copy a Send Email connector in your Process model:

1. ​[View your Processes](https://processmaker.gitbook.io/processmaker-4-community/-LPblkrcFWowWJ6HZdhC/~/drafts/-LRhVZm0ddxDcGGdN5ZN/primary/designing-processes/viewing-processes/view-the-list-of-processes/view-your-processes#view-all-processes). The **Processes** page displays.
2. Click the **Open Modeler** icon![](../../../../.gitbook/assets/open-modeler-edit-icon-processes-page-processes.png)to edit the selected Process model. Process Modeler displays.
3. Select the Send Email connector to copy. Available options display above the selected connector. ![](../../../../.gitbook/assets/copy-send-email-connector-process-modeler-designer.png) 
4. Click the **Copy Element** icon![](../../../../.gitbook/assets/remove-icon.png). The Process model connector copies. ![](../../../../.gitbook/assets/copied-send-email-connector-process-modeler-designer.png) 

## Delete a Send Email Connector

Deleting a Process model [connector](../what-is-a-connector.md) also deletes any [Sequence Flow](../../model-your-process/process-modeling-element-descriptions.md#sequence-flow) and/or [Message Flow](../../model-your-process/process-modeling-element-descriptions.md#message-flow) elements incoming to or outgoing from that element. For example, if a Process model connector is deleted that has both incoming and outgoing Sequence Flow elements, the Sequence Flow elements must be reconnected for the remaining elements/connectors.

{% hint style="info" %}
[A package and permissions are required to do this](email-connector.md#package-and-permissions-required).
{% endhint %}

Follow these steps to delete a Send Email connector from your Process model:

1. ​[View your Processes](https://processmaker.gitbook.io/processmaker-4-community/-LPblkrcFWowWJ6HZdhC/~/drafts/-LRhVZm0ddxDcGGdN5ZN/primary/designing-processes/viewing-processes/view-the-list-of-processes/view-your-processes#view-all-processes). The **Processes** page displays.
2. Click the **Open Modeler** icon![](../../../../.gitbook/assets/open-modeler-edit-icon-processes-page-processes.png)to edit the selected Process model. Process Modeler displays.
3. Select the Send Email connector to delete. Available options display above the selected connector. ![](../../../../.gitbook/assets/delete-send-email-connector-process-modeler-designer.png) 
4. Click the **Delete** icon![](../../../../.gitbook/assets/remove-icon.png). The Process model connector deletes.

## Settings

{% hint style="info" %}
[A package and permissions are required to do this](email-connector.md#package-and-permissions-required).
{% endhint %}

Follow these steps to configure a Send Email connector:

1. Ensure that the **Hide Menus** button![](../../../../.gitbook/assets/hide-menus-button-process-modeler-processes.png)is not enabled. See [Maximize the Process Modeler Canvas View](../../navigate-around-your-process-model.md#maximize-the-process-modeler-canvas-view).
2. Select the Send Email connector from the Process model in which to configure its settings. The **Send Email** configuration settings display. ![](../../../../.gitbook/assets/send-email-control-connector-configuration-process-modeler-processes.png)
3. In the **Email** setting, enter the email address to which the Send Email connector sends an email when this Send Email control triggers. The Send Email connector only supports sending an email to one email recipient. You may use the value from a [ProcessMaker Screen](../../../design-forms/what-is-a-form.md)'s **Variable Name** setting as a variable in this setting. For example, if your Process model references a ProcessMaker Screen that contains a [Line Input control](../../../design-forms/screens-builder/control-descriptions/line-input-control-settings.md) with the **Variable Name** setting value of `EmailAddress` that the Request participant enters an email address, use mustache syntax `{{EmailAddress}}` to use that Line Input control's value in the **Email** setting.
4. In the **Name** setting, enter the name of the email recipient. You may use the value from a ProcessMaker Screen's **Variable Name** setting as a variable in this setting. For example, if your Process model references a ProcessMaker Screen that contains a Line Input control with the **Variable Name** setting value of `FullName` that the Request participant enters an name, use mustache syntax `{{FullName}}` to use that Line Inputs control's value in the **Name** setting.
5. In the **Subject** setting, enter the subject of the email the Send Email connector sends.
6. From the **Email body** drop-down menu, select which ProcessMaker Screen that Send Email connector references. This drop-down menu displays only [Email](../../../design-forms/screens-builder/types-for-screens.md#email)-type ProcessMaker Screens so the email recipient can read the body of the email. Note that another Send Email connector located elsewhere in the Process model may reference a different ProcessMaker Screen to display a different email body when it triggers.

## Related Topics

{% page-ref page="../../../../package-development-distribution/package-a-connector/email.md" %}

{% page-ref page="../../../design-forms/screens-builder/types-for-screens.md" %}

{% page-ref page="../what-is-a-connector.md" %}

{% page-ref page="../../../../package-development-distribution/first-topic.md" %}

{% page-ref page="../../copy-process-model-elements-or-connectors.md" %}

