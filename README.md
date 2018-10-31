# ProcessMaker 4.1 Community Edition Documentation

![ProcessMaker](http://www.processmaker.com/themes/processmaker/images/logo.jpg)

[![CircleCI](https://circleci.com/gh/ProcessMaker/bpm/tree/develop.svg?style=svg&circle-token=bc15deff649712440252088a12ec20b4b7c96826)](https://circleci.com/gh/ProcessMaker/bpm/tree/develop)

## ProcessMaker 4.1 Community Edition Documentation

#### Overview

ProcessMaker is an open source, workflow management software suite, which includes tools to automate your workflow, design forms, create documents, assign roles and users, create routing rules, and map an individual process quickly and easily. It's relatively lightweight and doesn't require any kind of installation on the client computer. This file describes the requirements and installation steps for the server.

### Contributing

When developing, make sure to turn on debugging in your `.env` so you can see the actual error instead of the Whoops page.

```text
APP_DEBUG=TRUE
```

#### API

The ProcessMaker API is documented using OpenAPI 3.0 documentation and can be viewed at `/api/documentation`. The documention is generated by adding annotations to Models and Controllers.

All api endpoints should be well annotated because it's how we generate the SDKs that are used when running scripts.

When developing, make sure to add this to your `.env` file so that any changes you make to the annotations are automatically turned into documentation when you reload the `/api/documentation` page:

```text
L5_SWAGGER_GENERATE_ALWAYS=TRUE
```

At the comment block at the top of the model, add an @OA annotation to describe the schema. See `ProcessMaker/Models/Process.php` for an example.

To keep things dry, you can define 2 schemas. One that inherits the other.

```php
/**
 * ...existing comments above...
 * 
 * @OA\Schema(
 *   schema="ProcessEditable",
 *   @OA\Property(property="process_category_uuid", type="string", format="uuid"),
 *   @OA\Property(property="name", type="string"),
 *   @OA\Property(property="description", type="string"),
 *   @OA\Property(property="status", type="string", enum={"ACTIVE", "INACTIVE"}),
 * ),
 * @OA\Schema(
 *   schema="Process",
 *   allOf={@OA\Schema(ref="#/components/schemas/ProcessEditable")},
 *   @OA\Property(property="user_uuid", type="string", format="uuid"),
 *   @OA\Property(property="uuid", type="string", format="uuid"),
 *   @OA\Property(property="created_at", type="string", format="date-time"),
 *   @OA\Property(property="updated_at", type="string", format="date-time"),
 * )
 */
class Process extends Model implements HasMedia
{
...
```

Now you can use the reference to the schema when annotating the controllers. See `ProcessMaker/Http/Controllers/Api/ProcessController.php` for an example.

```php
    /**
     * @OA\Get(
     *     path="/processes",
     *     summary="Returns all processes that the user has access to",
     *     operationId="getProcesses",
     *     tags={"Process"},
     *     @OA\Parameter(ref="#/components/parameters/filter"),
     *     @OA\Parameter(ref="#/components/parameters/order_by"),
     *     @OA\Parameter(ref="#/components/parameters/order_direction"),
     *     @OA\Parameter(ref="#/components/parameters/per_page"),
     *     @OA\Parameter(ref="#/components/parameters/"),
     * 
     *     @OA\Response(
     *         response=200,
     *         description="list of processes",
     *         @OA\JsonContent(
     *             type="object",
     *             @OA\Property(
     *                 property="data",
     *                 type="array",
     *                 @OA\Items(ref="#/components/schemas/Process"),
     *             ),
     *             @OA\Property(
     *                 property="meta",
     *                 type="object",
     *                 allOf={@OA\Schema(ref="#/components/schemas/metadata")},
     *             ),
     *         ),
     *     ),
     * )
     */
    public function index(Request $request)
    {
    ...
```

And for a show method

```php
    /**
     * @OA\Get(
     *     path="/processes/{processUuid}",
     *     summary="Get single process by ID",
     *     operationId="getProcessByUuid",
     *     tags={"Process"},
     *     @OA\Parameter(
     *         description="ID of process to return",
     *         in="path",
     *         name="processUuid",
     *         required=true,
     *         @OA\Schema(
     *           type="string",
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Successfully found the process",
     *         @OA\JsonContent(ref="#/components/schemas/Process")
     *     ),
     */
    public function show(Request $request, Process $process)
    {
    ...
```

**Notes**

`operationId` will be the method name of the generated code. It can be anything camel cased but should be named some intuitive.

**Testing with Swagger UI**

Reload the swagger UI at `api/documentation` page in your browser to see the results and debug any errors with the annotations.

All api requests are authenticated with laravel passport oauth2. You need to generate a swagger ui client for your current logged in user.

First, get your user's uuid in text format.

```text
$ php artisan tinker
>>> User::first()->uuid_text
```

Copy the UUID that looks like `1eaee1f0-cd80-11e8-9feb-0242cdbcf107`

Then use php artisan to create the client

```text
php artisan passport:client
```

It will ask you several questions. For `Which user ID should the client be assigned to?` enter the uuid you got before. For `What should we name the client?` enter `swagger-ui` and for `Where should we redirect` enter your app's url with the path `/api/oauth2-callback`, for example `https://bpm4.processmaker.local/api/oauth2-callback` \(don't forget to match http and https\)

Copy the resulting client id and client secret. Then in the swagger UI click on Authorize and enter the client id and secret. You should now be able to use the "Try it out" functionality.

You can add `SWAGGER_CLIENT_ID` and `SWAGGER_CLIENT_SECRET` to your .env so you don't have to keep entering it.

**More Info**

Detailed examples can be found at [https://github.com/zircote/swagger-php/tree/master/Examples/petstore.swagger.io](https://github.com/zircote/swagger-php/tree/master/Examples/petstore.swagger.io)

Full OpenAPI 3.0 specification at [https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.1.md](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.1.md)

#### License

ProcessMaker - Automate your Workflow Copyright \(C\) 2002 - 2018 ProcessMaker Inc.

For further information visit: [http://www.processmaker.com/](http://www.processmaker.com/)

