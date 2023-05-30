Create a form that will contain the following fields:
name - dish name (text field)
preparation_time - preparation time (duration field, would be nice if the input will be formatted like 00:00:00)
type - dish type (select field with the following options: pizza, soup, sandwich)
after selecting dish type, conditionally display other fields:
for pizza:
no_of_slices - # of slices (number field)
diameter - diameter (float field)
for soup:
spiciness_scale - spiciness scale (1-10)
for sandwich:
slices_of_bread - number of slices of bread required (number field)

All fields should be required (fields depending on the dish type should be required conditionally based on what type of dish is selected).

Data should be submitted via POST request as a JSON to https://umzzcc503l.execute-api.us-west-2.amazonaws.com/dishes/ and the form should support returned validation errors (if any).

Example request:
curl -H 'Content-Type: application/json' -X POST -d '{"name": "HexOcean pizza", "preparation_time": "01:30:22", "type": "pizza", "no_of_slices": 4, "diameter": 33.4}' https://umzzcc503l.execute-api.us-west-2.amazonaws.com/dishes/

Example response:
{
  "diameter": 33.4,
  "name": "HexOcean pizza",
  "no_of_slices": 4,
  "preparation_time": "01:30:22",
  "type": "pizza",
  "id": 1
}

Please focus on code cleanliness and quality.

