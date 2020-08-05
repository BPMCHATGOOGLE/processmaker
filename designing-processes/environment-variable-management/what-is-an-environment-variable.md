---
description: Understand how to use Environment Variables in ProcessMaker.
---

# What is an Environment Variable?

## Overview

In ProcessMaker, an Environment Variable is a secure, abstract proxy for any sensitive information that you need to use in a [Process](../viewing-processes/what-is-a-process.md). Any ProcessMaker Environment Variable can be re-used in any Process to abstract information securely throughout your organization.

You do not need to know the sensitive information that the ProcessMaker Environment Value represents. The Process Owner creates the placeholder for that sensitive information, and then the value for the ProcessMaker Environment Value is entered or read via a [ProcessMaker Script](../scripts/what-is-a-script.md) during a [Request](../../using-processmaker/requests/what-is-a-request.md).

Below are a few examples how to use ProcessMaker Environment Variables:

* A Request participant's username and password may be entered into a [ProcessMaker Screen](../design-forms/what-is-a-form.md) as part of a [Task](../../using-processmaker/task-management/what-is-a-task.md) that passes each ProcessMaker Environment Variable's value securely to a third-party service.
* A Request participant's credit card information securely interacts with an online payment processing service through multiple ProcessMaker Environment Variables.
* A Request participant's banking information securely interacts with a bank to make transactions securely while following compliance protocols.

{% hint style="info" %}
See [ProcessMaker and Environment Variable Syntax, Usage, and Examples](../scripts/script-editor.md#processmaker-and-environment-variable-syntax-usage-and-examples) for how to use an Environment Variable in each programming language that ProcessMaker supports.
{% endhint %}

## Related Topics

{% page-ref page="manage-your-environment-variables/view-all-environment-variables.md" %}

{% page-ref page="manage-your-environment-variables/create-a-new-environment-variable.md" %}

{% page-ref page="manage-your-environment-variables/search-for-an-environment-variable.md" %}

{% page-ref page="manage-your-environment-variables/edit-an-environmental-variable.md" %}

{% page-ref page="manage-your-environment-variables/remove-an-environment-variable.md" %}

{% page-ref page="../viewing-processes/what-is-a-process.md" %}

{% page-ref page="../scripts/what-is-a-script.md" %}

{% page-ref page="../../using-processmaker/requests/what-is-a-request.md" %}

{% page-ref page="../design-forms/what-is-a-form.md" %}

{% page-ref page="../../using-processmaker/task-management/what-is-a-task.md" %}

