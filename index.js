network.endpoints.create('params', 'GET', 'onGetParams');

events.On('onGetParams', async () => {
  return api.config.getParams();
});

GenerateConfig([
  {
    key: 'titleTemplate',
    type: 'text',
    default: '{who}',
    editor: {
      label: {
        en: 'Title template',
        ru: 'Шаблон заголовка',
        uk: 'Шаблон заголовка',
      },
      placeholder: {
        en: '{who}',
        ru: '{who}',
        uk: '{who}',
      },
      hint: {
        en: 'Use {who} for the trigger username.',
        ru: 'Используйте {who} для имени пользователя.',
        uk: 'Використовуйте {who} для імені користувача.',
      },
    },
  },
  {
    key: 'messageTemplate',
    type: 'text',
    default: '{message}',
    editor: {
      label: {
        en: 'Message template',
        ru: 'Шаблон сообщения',
        uk: 'Шаблон повідомлення',
      },
      placeholder: {
        en: '{message}',
        ru: '{message}',
        uk: '{message}',
      },
      hint: {
        en: 'Use {message} for the trigger message.',
        ru: 'Используйте {message} для текста события.',
        uk: 'Використовуйте {message} для тексту події.',
      },
    },
  },
  {
    key: 'playSound',
    type: 'boolean',
    default: true,
    editor: {
      label: {
        en: 'Play notification sound',
        ru: 'Воспроизводить звук уведомления',
        uk: 'Відтворювати звук сповіщення',
      },
    },
  },
  {
    key: 'soundVolume',
    type: 'number',
    default: 80,
    editor: {
      label: {
        en: 'Sound volume (%)',
        ru: 'Громкость звука (%)',
        uk: 'Гучність звуку (%)',
      },
      min: 0,
      max: 100,
    },
  },
]);
