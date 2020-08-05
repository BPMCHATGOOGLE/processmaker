---
description: Edit the sensitive information that an Environment Variable represents.
---

# Edit an Environmental Variable

## Edit a ProcessMaker Environment Variable

{% hint style="info" %}
Your ProcessMaker user account or group membership must have the following permissions to edit a ProcessMaker Environment Variable unless your user account has the **Make this user a Super Admin** setting selected:

* Environment Variables: Edit Environment Variables
* Environment Variables: View Environment Variables

See the ProcessMaker [Environment Variable](../../../processmaker-administration/permission-descriptions-for-users-and-groups.md#environment-variables) permissions or ask your ProcessMaker Administrator for assistance.
{% endhint %}

Follow these steps to edit a ProcessMaker Environment Variable:

1. [View your ProcessMaker Environment Variables.](view-all-environment-variables.md) The **Environment Variables** page displays.
2. Click the **Edit** icon![](../../../.gitbook/assets/open-modeler-edit-icon-processes-page-processes.png) for the ProcessMaker Environment Variable to edit. The **Edit** page displays.  

   ![](../../../.gitbook/assets/edit-environment-variable-page-processes.png)

3. Edit the following information about the ProcessMaker Environment Variable as necessary:
   * In the **Name** setting, edit the name of the ProcessMaker Environment Variable. The ProcessMaker Environment Variable name can only contain letters, numbers, and hyphens \(`-`\). This is a required setting.
   * In the **Description** setting, enter the description of the ProcessMaker Environment Variable. This is a required setting.
   * Optionally, in the **Value** setting, edit or enter the ProcessMaker Environment Variable value. Entering or editing a value is optional since ProcessMaker Environment Variables are secure, abstract proxies for sensitive information you assign to contain a value that can be determined during an in-progress Request.
4. Click **Save**.

{% hint style="info" %}
See [ProcessMaker and Environment Variable Syntax, Usage, and Examples](../../scripts/script-editor.md#processmaker-and-environment-variable-syntax-usage-and-examples) for how to use an Environment Variable in each programming language that ProcessMaker supports.
{% endhint %}

## Related Topics

{% page-ref page="../what-is-an-environment-variable.md" %}

{% page-ref page="view-all-environment-variables.md" %}

{% page-ref page="create-a-new-environment-variable.md" %}

{% page-ref page="search-for-an-environment-variable.md" %}

{% page-ref page="remove-an-environment-variable.md" %}

