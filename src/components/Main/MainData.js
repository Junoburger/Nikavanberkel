import React from 'react'

export const MainData = [
    {
      name: "Main",
      children: [
        {
          name: 'Bio',
        },
        {
          name: "Projects",
          attributes: {
            // keyA: 'val A',
            // keyB: 'val B',
            // keyC: 'val C',
          },
          _collapsed: true,
          children:[
            {
                name: '1: Project Name',
              },
              {
                name: '2: Project  Name',
              },
          ],
        },
        {
          name: "News",
        },
        {
            name: "Contact",
        },
      ],
    },
  ];
