import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  itemsPerPage=5;
  currentPage=1;
  data =[
    { id:'1',
      firstName: 'Mark',
      lastName: 'Otto',
      handle:'@mdo',
    },
    { id:'2',
      firstName: 'Mark',
      lastName: 'Otto',
      handle:'@mdo',
    },
    { id:'3',
      firstName: 'Mark',
      lastName: 'Otto',
      handle:'@mdo',
    },
    { id:'4',
      firstName: 'Mark',
      lastName: 'Otto',
      handle:'@mdo',
    },
    { id:'5',
      firstName: 'Mark',
      lastName: 'Otto',
      handle:'@mdo',
    },
    { id:'6',
      firstName: 'Mark',
      lastName: 'Otto',
      handle:'@mdo',
    },
    { id:'7',
      firstName: 'Mark',
      lastName: 'Otto',
      handle:'@mdo',
    },
    { id:'8',
      firstName: 'Mark',
      lastName: 'Otto',
      handle:'@mdo',
    },
    { id:'9',
      firstName: 'Mark',
      lastName: 'Otto',
      handle:'@mdo',
    },
    { id:'10',
      firstName: 'Mark',
      lastName: 'Otto',
      handle:'@mdo',
    },    
    { id:'10',
      firstName: 'Mark',
      lastName: 'Otto',
      handle:'@mdo',
    },
    { id:'11',
      firstName: 'Mark',
      lastName: 'Otto',
      handle:'@mdo',
    },
    { id:'12',
      firstName: 'Mark',
      lastName: 'Otto',
      handle:'@mdo',
    },    
    { id:'13',
      firstName: 'Mark',
      lastName: 'Otto',
      handle:'@mdo',
    },
    { id:'14',
      firstName: 'Mark',
      lastName: 'Otto',
      handle:'@mdo',
    },
    { id:'15',
      firstName: 'Mark',
      lastName: 'Otto',
      handle:'@mdo',
    },
    { id:'15',
      firstName: 'Mark',
      lastName: 'Otto',
      handle:'@mdo',
    },
    { id:'16',
      firstName: 'Mark',
      lastName: 'Otto',
      handle:'@mdo',
    },   
    {  id:'17',
      firstName: 'Mark',
      lastName: 'Otto',
      handle:'@mdo',
    },
    { id:'18',
      firstName: 'Mark',
      lastName: 'Otto',
      handle:'@mdo',
    },
    { id:'19',
      firstName: 'Mark',
      lastName: 'Otto',
      handle:'@mdo',
    },
    { id:'20',
      firstName: 'Mark',
      lastName: 'Otto',
      handle:'@mdo',
    },
    {id:'21',
      firstName: 'Mark',
      lastName: 'Otto',
      handle:'@mdo',
    },    
    { id:'21',
      firstName: 'Mark',
      lastName: 'Otto',
      handle:'@mdo',
    },
    { id:'22',
      firstName: 'Mark',
      lastName: 'Otto',
      handle:'@mdo',
    },
    {id:'23',
      firstName: 'Mark',
      lastName: 'Otto',
      handle:'@mdo',
    },
    {id:'24',
      firstName: 'Mark',
      lastName: 'Otto',
      handle:'@mdo',
    },    
    { id:'25',
      firstName: 'Mark',
      lastName: 'Otto',
      handle:'@mdo',
    },
    { id:'26',
      firstName: 'Mark',
      lastName: 'Otto',
      handle:'@mdo',
    },
    { id:'27',
      firstName: 'Mark',
      lastName: 'Otto',
      handle:'@mdo',
    },
    { id:'28',
      firstName: 'Mark',
      lastName: 'Otto',
      handle:'@mdo',
    },
    { id:'29',
      firstName: 'Mark',
      lastName: 'Otto',
      handle:'@mdo',
    },
    { id:'30',
      firstName: 'Mark',
      lastName: 'Otto',
      handle:'@mdo',
    },
    { id:'31',
      firstName: 'Mark',
      lastName: 'Otto',
      handle:'@mdo',
    },
    { id:'32',
      firstName: 'Mark',
      lastName: 'Otto',
      handle:'@mdo',
    },
    { id:'33',
      firstName: 'Mark',
      lastName: 'Otto',
      handle:'@mdo',
    },
    { id:'34',
      firstName: 'Mark',
      lastName: 'Otto',
      handle:'@mdo',
    },
    { id:'35',
      firstName: 'Mark',
      lastName: 'Otto',
      handle:'@mdo',
    },
    { id:'36',
      firstName: 'Mark',
      lastName: 'Otto',
      handle:'@mdo',
    },
    { id:'37',
      firstName: 'Mark',
      lastName: 'Otto',
      handle:'@mdo',
    },
    { id:'38',
    firstName: 'Mark',
    lastName: 'Otto',
    handle:'@mdo',
  },
  { id:'39',
  firstName: 'Mark',
  lastName: 'Otto',
  handle:'@mdo',
},
{ id:'40',
firstName: 'Mark',
lastName: 'Otto',
handle:'@mdo',
},
  ]

  get paginatedData(){
    const start =(this.currentPage-1)*(this.itemsPerPage);
    const end=(start+this.itemsPerPage)
    return this.data.slice(start,end)
  }

  changePage(page:number){
    this.currentPage=page;
  }
  
  
  constructor() { }

  ngOnInit(): void {
  }

  }



