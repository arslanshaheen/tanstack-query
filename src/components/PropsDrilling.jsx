export const ParentComponent=()=>{
    return  <section style={{
        padding: '1rem',
        height: '100lvh',
        fontFamily: 'var(--font-display)',
        letterSpacing: '0.05em',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#111827', 
        color: 'white'
      }}>
        <h1>component A </h1>
        <ChildComponent data="to pass props Reactjs_Data"/>
      </section>
}

const ChildComponent=(props)=>{
    return(
        <>
        <h1>Hello, I am Component B</h1>
        <GrandChildComponent data={props.data}/>
        </>
    )
}

const GrandChildComponent=(props)=>{
   return(
   <>
        <h1>Hello, I am Component c</h1>
    <GrandGrandChildComponent data={props.data}/>
    </> 
)
}


const GrandGrandChildComponent=(props)=>{
    return(
        <>
        <h1>Hello, I love {props.data}</h1>
        </>
    )
}