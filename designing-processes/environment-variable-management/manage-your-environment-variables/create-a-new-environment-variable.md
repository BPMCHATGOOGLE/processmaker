---
description: >-
  Create a new ProcessMaker Environment Variable that can be re-used in any
  Process.
---

# Create a New Environment Variable

## Create a New ProcessMaker Environment Variable

{% hint style="info" %}
Your ProcessMaker user account or group membership must have the following permissions to create a ProcessMaker Environment Variable unless your user account has the **Make this user a Super Admin** setting selected:

* Environment Variables: Create Environment Variables
* Environment Variables: View Environment Variables

See the ProcessMaker [Environment Variable](../../../processmaker-administration/permission-descriptions-for-users-and-groups.md#environment-variables) permissions or ask your ProcessMaker Administrator for assistance.
{% endhint %}

Follow these steps to create a new ProcessMaker Environment Variable:

1. [View your ProcessMaker Environment Variables.](view-all-environment-variables.md) The **Environment Variables** page displays.
2. Click the **+Environment Variable** button. The **Create Environment Variable** page displays.  

   ![](../../../.gitbook/assets/create-environment-variable-screen-processes.png)

3. In the **Name** setting, enter the unique name of the ProcessMaker Environment Variable. The ProcessMaker Environment Variable name can only contain letters, numbers, and hyphens \(`-`\). This is a required setting.
4. In the **Description** setting, enter a description for the ProcessMaker Environment Variable. This is a required setting.
5. Optionally, in the **Value** setting, enter the value for the ProcessMaker Environment Variable. Entering a value is optional since ProcessMaker Environment Variables are secure, abstract proxies for sensitive information you assign to contain a value that can be determined during an in-progress Request.
6. Click **Save**. The screen closes and the following message displays: **The environment variable was created.** The **Environment Variables** page displays with your new ProcessMaker Environment Variable.

{% hint style="info" %}
See [ProcessMaker and Environment Variable Syntax, Usage, and Examples](../../scripts/script-editor.md#processmaker-and-environment-variable-syntax-usage-and-examples) for how to use an Environment Variable in each programming language that ProcessMaker supports.
{% endhint %}

## Related Topics

{% page-ref page="../what-is-an-environment-variable.md" %}

{% page-ref page="view-all-environment-variables.md" %}

{% page-ref page="search-for-an-environment-variable.md" %}

{% page-ref page="edit-an-environmental-variable.md" %}

{% page-ref page="remove-an-environment-variable.md" %}

