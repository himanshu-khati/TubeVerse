import { sentence, lorem } from "txtgen";

export const COMMENTS_DATA = [
  {
    name: lorem(2, 2),
    comment: sentence(),
    id: 1,
    replies: [
      {
        id: 1.1,
        name: lorem(2, 2),
        comment: sentence(),
        replies: [
          {
            id: 1.11,
            name: lorem(2, 2),
            comment: sentence(),
            replies: [
              {
                id: 1.12,
                name: lorem(2, 2),
                comment: sentence(),
                replies: [],
              },
            ],
          },
        ],
      },
      {
        id: 1.2,
        name: lorem(2, 2),
        comment: sentence(),
        replies: [],
      },
    ],
  },

  {
    name: lorem(2, 2),
    comment: sentence(),
    id: 2,
    replies: [
      {
        id: 2.1,
        name: lorem(2, 2),
        comment: sentence(),
        replies: [
          {
            id: 2.11,
            name: lorem(2, 2),
            comment: sentence(),
            replies: [
              {
                id: 2.12,
                name: lorem(2, 2),
                comment: sentence(),
                replies: [],
              },
            ],
          },
        ],
      },
      {
        id: 2.2,
        name: lorem(2, 2),
        comment: sentence(),
        replies: [],
      },
    ],
  },
];
