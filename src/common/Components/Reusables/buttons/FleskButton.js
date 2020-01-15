import React from 'react'




 const FleskButton = (onSubmit,onClick,onChage,onSelect,onPlay,onPuse,childern,style,componentName,externalTextStyle) => {
    componentName = getcomponentName(componentName);
    let message = `user clicked on ${childern} Button in ${componentName} component`;
    const {buttonStyle, textStyle} = styles;
    externalTextStyle = externalTextStyle ? externalTextStyle: {};
    return (
        <div>
           <button 
           onClick={() => track(message, 'click')} onClick ={onClick} 
           onSubmit={() => track(message,'submited')} onSubmit={onSubmit}
           onChage={() =>track(message, 'changed')} onChage ={onChage}
           onSelect={() =>track(message, 'selected')} onSelect ={onSelect}
           onPlay={() =>track(message, 'played')} onplay ={onPlay}
           onPuse={() =>track(message, 'pused')} onPuse ={onPuse}
           style ={[buttonStyle, style, textStyle]}
           >
               <Text  style={{...textStyle,... externalTextStyle}}>
                   {childern}
               </Text>
           </button>
        </div>
    )
}
export default FleskButton