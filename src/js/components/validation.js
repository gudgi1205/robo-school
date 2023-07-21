import { validateForms } from '../functions/validate-forms';

const rules = [
      {
        ruleSelector: '.input-name',
        rules: [
          {
            rule: 'minLength',
            value: 3
          },
          {
            rule: 'required',
            value: true,
            errorMessage: 'Заполните имя!'
          }
        ]
      },
      {
        ruleSelector: '.input-tel',
        tel: true,
        telError: 'Введите корректный телефон',
        rules: [
          {
            rule: 'required',
            value: true,
            errorMessage: 'Заполните телефон!'
          }
        ]
      },
      {
            ruleSelector: '.input-email',
            rules: [
              {
                rule: 'minLength',
                value: 3,
                errorMessage: 'Минимум три символа'
              },
              {
                rule: 'required',
                value: true,
                errorMessage: 'Заполните email!'
              },
              {
                  rule: 'email',
                  value: true,
                  errorMessage: 'Введите корректный email'
                }
            ]
          },
    ];


const afterForm = () => {
  console.log('Произошла отправка, тут можно писать любые действия');
};

validateForms('.order__form', rules, afterForm);