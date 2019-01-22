import React from 'react'


const Bio = <a  href="/about">About</a>
const Projects = <a href="/projects">Archive</a>
const News = <a href="/news">News</a>

export const MainData = [
  {
    name: "",
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
    ],
  },
];


