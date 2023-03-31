export interface Content {
    id: number;
    category: number;
    filter: boolean;
    name: string;
    image: string;
    description: string;
    full_content: string;

  }
export const contents = [
    {
        id: 1,
        category: 1,
        filter: true,
        name: "How to download Python 3",
        image: "https://www.starzel.de/blog/four-options-to-try-plone-5-2-on-python-3/@@download/image/py3.png",
        description: "How to download python 3 for MacOS and Windows",
        full_content: "Just ask Google how to do it",
    },
    
  
  ];