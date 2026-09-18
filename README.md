# Workout Tracker API

## Endpoints de Users

| Método | Endpoint | Descripción | Body | Status |
|--------|----------|-------------|------|--------|
| GET | /api/v1/users | Lista usuarios | — | 200 |
| GET | /api/v1/users/:id | Obtiene uno | — | 200, 404 |
| POST | /api/v1/users | Crea usuario | `{name, email, role}` | 201, 400 |
| PUT | /api/v1/users/:id | Actualiza completo | `{name, email, role}` | 200, 400, 404 |
| PATCH | /api/v1/users/:id | Actualiza parcial | `{...campos}` | 200, 404 |
| DELETE | /api/v1/users/:id | Elimina | — | 204, 404 |

### Ejemplo request POST

```bash
curl -X POST http://localhost:8000/api/v1/users \
  -H "Content-Type: application/json" \
  -d '{"name":"Ana","email":"miguel@example.com"}'

  ## Endpoints de Workouts

| Método | Endpoint | Descripción | Body | Status |
|--------|----------|-------------|------|--------|
| GET | /api/v1/workouts | Lista workouts | — | 200 |
| GET | /api/v1/workouts/:id | Obtiene uno | — | 200, 404 |
| POST | /api/v1/workouts | Crea workout | `{userId, name, date, duration?, notes?}` | 201, 400 |
| PUT | /api/v1/workouts/:id | Actualiza completo | `{userId, name, date, duration, notes}` | 200, 400, 404 |
| PATCH | /api/v1/workouts/:id | Actualiza parcial | `{...campos}` | 200, 404 |
| DELETE | /api/v1/workouts/:id | Elimina | — | 204, 404 |

### Filtros disponibles (query strings)
- `?userId=1`
- `?date=2025-09-20`
- `?search=pecho`

### Ejemplo request POST

```bash
curl -X POST http://localhost:8000/api/v1/workouts \
  -H "Content-Type: application/json" \
  -d '{"userId":"1","name":"Pierna","date":"2025-09-21"}'