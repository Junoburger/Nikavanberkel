import React from 'react'

const Bio = <a href="/bio">Bio</a>
const Projects = <a href="/projects">Projects</a>
const News = <a href="/news">News</a>
const Contact = <a href="/contact">Contact</a>


export const MainData = [
    {
      name: "Main",
      children: [
        {
          name: Bio,
        },
        {
          name: Projects,
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
          name: News,
        },
        {
            name: Contact,
        },
      ],
    },
  ];
