//   profitList:  {
//     external-site  |   jsonrpc: '2.0',
//     external-site  |   id: '1637050952809',
//     external-site  |   result: {
//         external-site  |     customer_restrictions: {
//             external-site  |       can_see: true,
//             external-site  |       reason: 'NEED_AUTHORIZATION',
//             external-site  |       message: 'Чтобы получить бонус партнёра, авторизуйтесь в интернет-банке'
//             external-site  |     },
//         external-site  |     customer_info: {},
//         external-site  |     catalog: { categories: [Array], offers: [Array] }
//         external-site  |   }
//     external-site  | }

const offers = {
  jsonrpc: "2.0",
  id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  error: {
    code: 0,
    message: "string",
    data: {},
  },
  result: {
    customer_restrictions: {
      can_see: true,
      can_take: true,
      reason: "NO_RESTRICTIONS",
      message: "string",
    },
    customer_info: {
      contacts: {
        phone: "string",
        email: "string",
      },
    },
    catalog: {
      categories: [
        {
          code: "string",
          name: "string",
        },
      ],
      offers: [
        {
          code: "string",
          strategy: "email",
          show_params: {
            image: "string",
            title: "string",
            subtitle: "string",
            description: "string",
            how_use: "string",
            terms: "string",
            terms_required: "string",
            terms_who: "string",
            button_text: "string",
            agreement_required: true,
            name: "string",
          },
          categories: ["string"],
          already_have: true,
          offer_result: {
            strategy: "email",
            strategy_email: {
              message: "string",
              customer_contacts: {
                phone: "string",
                email: "string",
              },
              sent_date: "string",
            },
            strategy_promocode: {
              message: "string",
              promocode: "string",
              expires_at: "string",
              given_at: "string",
              url: "string",
            },
            strategy_url: {
              message: "string",
              url: "string",
              redirect_date: "string",
            },
            strategy_api: {
              form: {
                form_fields: [
                  {
                    code: "string",
                    value: "string",
                  },
                ],
              },
              lead_id: "string",
            },
            strategy_special: {
              code: "HH",
              data: {
                hh: {
                  email: "string",
                },
              },
            },
          },
          order_offer: 0,
          order_sorting: 0,
          variants: [
            {
              code: "string",
              text: "string",
              value: "string",
            },
          ],
          strategy_data: {
            api: {
              form_fields: [
                {
                  code: "string",
                  name: "string",
                  description: "string",
                  validator: {
                    type: "STRING",
                    required: true,
                  },
                },
              ],
            },
            special: {
              code: "HH",
              data: {
                hh: {},
              },
            },
          },
        },
      ],
    },
  },
};

const offer = {
  code: "string",
  strategy: "email",
  already_have: true,
  order_offer: 0,
  order_sorting: 0,
  categories: ["string"],
  show_params: {
    image: "string",
    title: "string",
    subtitle: "string",
    description: "string",
    how_use: "string",
    terms: "string",
    terms_required: "string",
    terms_who: "string",
    button_text: "string",
    agreement_required: true,
    name: "string",
  },
  offer_result: {
    strategy: "email",
    strategy_email: {
      message: "string",
      customer_contacts: {
        phone: "string",
        email: "string",
      },
      sent_date: "string",
    },
    strategy_promocode: {
      message: "string",
      promocode: "string",
      expires_at: "string",
      given_at: "string",
      url: "string",
    },
    strategy_url: {
      message: "string",
      url: "string",
      redirect_date: "string",
    },
    strategy_api: {
      form: {
        form_fields: [
          {
            code: "string",
            value: "string",
          },
        ],
      },
      lead_id: "string",
    },
    strategy_special: {
      code: "HH",
      data: {
        hh: {
          email: "string",
        },
      },
    },
  },
  strategy_data: {
    api: {
      form_fields: [
        {
          code: "string",
          name: "string",
          description: "string",
          validator: {
            type: "STRING",
            required: true,
          },
        },
      ],
    },
    special: {
      code: "HH",
      data: {
        hh: {},
      },
    },
  },
  variants: [
    {
      code: "string",
      text: "string",
      value: "string",
    },
  ],
};

const me = { name: "v" };

options = [
  { date: "2017-07-24" },
  { date: "2017-04-24" },
  { date: "2017-09-24" },
  { date: "2017-09-29" },
  { date: "2018-05-21" },
];

const result = options.reduce((acc, date, index) => {
  const [year, month, day] = date.date.split("-");

  if (year in acc) acc[year].push(`${month}-${day}`);
  else acc[year] = [`${month}:${day}`];

  if (index === options.length - 1) {
    for (const year in acc) acc[year] = acc[year].sort();
  }

  return acc;
}, {});

// const reactComponent = "import React from \\'react\\'\n" +
//     "import './FnComponentStyle.scss'\n" +
//     "\n" +
//     "type Props = {\n" +
//     "    prop?: string\n" +
//     "    children: React.ReactElement\n" +
//     "}\n" +
//     "\n" +
//     "const FnComponent: React.FC<Props> = ({}) => {\n" +
//     "    return <div className={'${className}'}>FnComponent</div>\n" +
//     "}\n" +
//     "\n" +
//     "export default FnComponent"
//
// console.log(reactComponent.replaceAll('nameComp', 'newName'));
// console.log(reactComponent.replaceAll('mainClass', 'class name'));
const words = 'адрес карп кума куст мир мука парк рим среда стук рост сорт трос';

words.split(' ').reduce((acc, word) => {
    console.log(word.sort())
    const ch = word.sort()

    if(!acc[ch]) acc[ch] = [word]

    if(acc[ch]) acc[ch].push(word)
    console.log('acc: ', acc)
    return acc
}, {})
