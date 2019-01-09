## Plugins
DISCLAIMER: This is currently a dev documentation. The documentation will expand as the plugin feature extends!

There are two ways of extending the Datamodel of the MapsProjectBundle.

- ProjectPluginInterface: For adding fields and storing more data in the project entities.
- DataPluginInterface: For adding fields and storing more data in the data entities.

The plugin mechanism is event driven. There are currently three methods in the interface that can
be used for adding more logic to this mechanism. 

- **addFields**: You can create and return a field list of C4GBrickFields, which then get added to the Project.
- **getEntity**: The plugin class must return the fully qualified namespace of the entity, in which the additional fields 
should be saved. See the interface doc for more info.
- **beforeSaveAction**: You can leave this method empty if you do not need it, but you can add custom code here that will be 
executed before the entities are persisted into the database.
- **getData (DataPluginInterface)**: The plugin class is expected to return an array of data, where the field names should
be the keys. This is intended for plugins that define extra fields in an extra entity. The additional plugins are not read 
automatically by the plugin mechanism itself!

Alternatively, you can always just extend the event mechanism and add new listeners to the existing events.
There are currently four events where a intervention in the workflow is possible:
- mapsproject.project.create

    This event builds the form for creating a project. 

- mapsproject.project.save

    This event calls the plugin methods to save the project and to execute code before the project is persisted. Useful
    if a plugin wishes to fill in additional data into the project.
- mapsproject.metadata.show

    This event builds the form for editing the data of a feature.
- mapsproject.metadata.save
    
    This event calls the plugin methods to save the feature data. 

The different listeners to the events have priorities configured, the intervals are in multiples of 1024.
This way, you can easily write your own listener and execute it at any time you wish. The priorities are visible via the 
command line interface:

- `bin/console debug:event-dispatcher` for the Contao 4 Standard-Edition (deprecated!).

- `vendor/bin/contao-console debug:event-dispatcher` for the Contao 4 Managed Edition.

Plugins are registered to the MapsProjectBundle via a plugins.json file in the 
Resources/config directory (Yes, that means the directory and the file can be created when not existent).
The structure of the plugins.json file is as follows: 

```json
{
  "plugins": [
    {
      "name": "Default Plugin",
      "id": 1,
      "projectPlugin": "con4gis\\MapsProjectBundle\\Classes\\Plugins\\DefaultProjectPlugin",
      "dataPlugin": "con4gis\\MapsProjectBundle\\Classes\\Plugins\\DefaultDataPlugin",
      "language": [tl_c4G_editormap_data, "fe_second_lang_file"]
    },
    {
      "name": "Second Plugin",
      "id": 2,
      "dataPlugin": "namespace\\for\\plugin\\Class",
      "language": ["language_file_for_plugin"]
    }

  ]
}
```
The keys "name" and "id" are mandatory and have to be unique. All of the other three options
are optional, but consider that building an empty plugin has not much value.


The value for the plugins has to be the fully qualified classname of the plugin class. Please note the double backslashs, 
if they are absent the string will not be interpreted properly.

As stated in the example, you can set one or more language files in the configuration. These are loaded on plugin instantiation.

Please note that the plugin entity has to have a field named 'pid', where the id of the entry in the main data table is stored.
If this column is missing in the plugin entity, the data can not be stored and retrieved correctly.