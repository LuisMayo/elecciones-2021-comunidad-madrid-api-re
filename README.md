# elecciones-2021-comunidad-madrid-api-re
 Reverse Engineering of the official API for 2021 Madrid's elections. Since this is an Spain-relevant project, comments and this README will be in Spanish. La API está incompleta porque sólo buscabamos una información concreta y no nos hemos entretenido demasiado en lo demás. Cualquier PR para arreglar esta situación es bienvenida

## Info
La URL base de la API parece ser 'https://resultados2021.comunidad.madrid/json/'. No hay ninguna autenticación. El servidor no permite las peticiones desde otros dominios (CORS).

También se parece de interes 'https://resultados2021.comunidad.madrid/assets/' donde se guardan recursos utiles

La API tiene las siguientes rutas:
 1. 'AU/AU12289999999.json': Resultados provisionales de las elecciones. Devuelve un JSON con la estructura definida en `results-response.ts`

 Existen los siguienbtes tiene las siguientes rutas:
 1. 'nomenclator.json': Relacion de partidos politicos con sus códigos de partido

## Contributing
Since this is a tiny project we don't have strict rules about contributions. Just open a Pull Request to fix any of the project issues or any improvement you have percieved on your own. Any contributions which improve or fix the project will be accepted as long as they don't deviate too much from the project objectives. If you have doubts about whether the PR would be accepted or not you can open an issue before coding to ask for my opinion