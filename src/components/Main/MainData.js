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
        _collapsed: true,
        children:[
          {
            name: '1: Project Name',
            attributes: {
              // pictureA: 'description A',
              // pictureB: 'description B',
              // pictureC: 'description C',
            },
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


