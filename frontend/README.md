# Frontend — Fullstack Profile Project

Это frontend-часть приложения для управления профилем пользователя, построенная на Next.js 16 с использованием TypeScript и современной архитектуры.

## 🛠️ Технологический стек

### Основные технологии
- **Next.js 16** — React-фреймворк с App Router
- **React 19** — Библиотека UI
- **TypeScript 5** — Статическая типизация
- **Zustand 5** — Управление состоянием
- **React Query 5** — Управление асинхронными данными
- **Axios** — HTTP-клиент
- **React Hook Form** — Валидация и управление формами
- **SCSS Modules** — Стилизация компонентов

### UI компоненты
- **Headless UI** — Недизайнерские компоненты
- **Radix UI** — Доступные UI примитивы
- **Lucide React** — Иконки
- **Swiper** — Слайдер

### Утилиты
- **Classnames** / **clsx** / **tailwind-merge** — Работа с CSS классами
- **Immer** — Невзаимозаменяемое обновление состояния
- **Sass** — Preprocessor для CSS

## 📁 Структура проекта

```
frontend/
├── src/
│   ├── app/                    # Next.js App Router страницы
│   ├── entities/               # Бизнес-сущности (Profile, User, Game)
│   ├── features/               # Пользовательские сценарии (EditableProfileCard, auth)
│   ├── pages/                  # Страницы (ProfilePage, HomePage)
│   ├── shared/                 # Переиспользуемые компоненты и утилиты
│   │   ├── api/               # API клиент
│   │   ├── lib/               # Утилиты и хуки
│   │   ├── types/             # Общие типы
│   │   └── ui/                # Атомарные UI компоненты
│   └── widgets/               # Сложные составные компоненты
```

## 🚀 Запуск проекта

### Предварительные требования
- Node.js 20+
- npm или yarn

### Установка зависимостей
```bash
npm install
```

### Development
```bash
npm run dev
```

Приложение запустится на [http://localhost:3000](http://localhost:3000)

### Production build
```bash
npm run build
npm start
```

### Линтинг
```bash
npm run lint
```

## 🌐 API

Приложение общается с backend по адресу `http://localhost:8000`

### Основные эндпоинты
- `POST /api/profile/update` — Обновление профиля
- `GET /api/profile/getProfile` — Получение данных профиля
- `POST /api/auth/login` — Вход
- `POST /api/auth/register` — Регистрация

## 📦 Основные компоненты

### Entities (Сущности)
- **Profile** — Карточка профиля, типизация данных
- **User** — Данные пользователя, аутентификация
- **Game** — Игровые данные

### Features (Фичи)
- **EditableProfileCard** — Редактируемая карточка профиля
- **auth** — Логин/регистрация

### Shared UI
- **Button** — Кнопка
- **Input** — Поле ввода
- **NotificationCard** — Уведомления
- **ErrorPage** — Страница ошибки
- **Spiner** — Индикатор загрузки

## 🔐 Аутентификация

Приложение использует localStorage для хранения токена аутентификации. Компонент `RequireAuthProvider` защищает маршруты, требующие авторизации.

## 🎨 Стилизация

Проект использует SCSS Modules для изолированной стилизации компонентов. Все стили находятся в файлах `*.module.scss` рядом с компонентами.

## 📝 Разработка

### Добавление новой сущности
1. Создать папку в `src/entities/`
2. Добавить типы в `types/`
3. Добавить UI компоненты в `ui/`

### Добавление новой фичи
1. Создать папку в `src/features/`
2. Добавить модель (store, service, types)
3. Добавить UI компонент

## 🤝 Вклад

1. Fork проекта
2. Создать ветку (`git checkout -b feature/AmazingFeature`)
3. Закоммитить изменения (`git commit -m 'Add some AmazingFeature'`)
4. Пуш в ветку (`git push origin feature/AmazingFeature`)
5. Открыть Pull Request

## 📄 Лицензия

Проект находится в разработке.
