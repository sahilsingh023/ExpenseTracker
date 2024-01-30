import { Component, OnInit } from '@angular/core';
import { Expense } from './expense';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit{
  expenses:Expense[]=[];
  newExpense:Expense=new Expense();
  editingExpense!:Expense;

  ngOnInit()  {
    {this.expenses=[
      {id:1,description:'Groceries',amount:50},
      {id:2,description:'Restaurent',amount:150}
    ];
  }
  }
  addExpense(){
    if(this.newExpense.description && this.newExpense.amount){
      this.expenses.push({ ...this.newExpense});
      this.newExpense=new Expense();
    }
  }

editExpense(expense:Expense){
  this.editingExpense={ ...expense};
}

updateExpense(){
  if (this.editingExpense.description && this.editingExpense.amount) {
    const index=this.expenses.findIndex(expense=>expense.id ===this.editingExpense.id);
    if(index>=0){
      this.expenses[index]={ ...this.editingExpense};
      this.editExpense!=null;
    }
  }
}

cancelEdit(){
  this.editingExpense!=null;
}

deleteExpense(expense:Expense){
  const index=this.expenses.findIndex(e=>e.id===expense.id);
  if(index>=0){
    this.expenses.splice(index,1);
  }
}

}
