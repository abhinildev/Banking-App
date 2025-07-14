import jsPDF from 'jspdf'
import autotable from 'jspdf-autotable'

export const downloadCSV=(transactions)=>{
    const headers=['Date','Type','Amount','Category']
    const rows=transactions.map((tx)=>[
        new Date(tx.createdAt).toLocaleDateString(),
        tx.type,
        tx.amount,
        tx.category|| 'Uncategorized',
    ])
    const csv=[headers,...rows].map((r)=>r.join(',')).join('\n')
    const blop=new Blob([csv],{type:'text/csv;charset=utf-8'})
    const url=URL.createObjectURL(blop)
    const link=document.createElement('a')
    link.href=url
    link.download='transactions.csv'
    link.click()
}
export const downloadPDF=(transactions)=>{
    const doc=new jsPDF()
    doc.text('Transacation Report',14,16)
    autotable(doc,{
        startY:20,
        head:[['Date','Type','Amount','Category']],
        body:transactions.map((tx)=>[
            new Date(tx.createdAt).toLocaleDateString(),
            tx.type,
            tx.amount,
            tx.category||'Uncategorized',
        ])
    })
    doc.save('transactions.pdf')
}