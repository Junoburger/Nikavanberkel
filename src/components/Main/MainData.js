import React from 'react'

export const MainData = [
    {
      name: "Main",
      children: [
        {
          name: <a href="/bio">Bio</a>,
        },
        {
          name: <a href="/projects">Projects</a>,
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
          name: <a href="/news">News</a>,
        },
        {
            name: <a href="/contact">Contact</a>,
        },
      ],
    },
  ];
