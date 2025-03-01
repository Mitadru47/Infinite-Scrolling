## Position Description: skeleton-card

 position: relative;
 - To position the generated ::after pseudo-element within #loader as the immediate child of each     skeleton-card element.

## Config Description: linear-gradient

 - The linear-gradient logic is being applied to the generated ::after pseudo-element of each skeleton-card.

        linear-gradient(
            
            {Gradient Direction: left to right} - 90deg,

            rgba(255, 255, 255, 0),
            
                - black 
                - opacity: 0 or 100% or fully transparent 
                - Gradient begins with primary background color
            
            rgba(255, 255, 255, 0.2) 20%,
            
                - black 
                - opacity: 0.2 or 80% or little translucent dark gray 
                - Next 20% of the gradient is gray-ish

            rgba(255, 255, 255, 0.5) 60%,
            
                - black 
                - opacity: 0.5 or 50% or translucent gray 
                - Next 60% of the gradient is white-ish

            rgba(255, 255, 255, 0),
            
                - black 
                - opacity: 0 or 100% or fully transparent 
                - Gradient ends with primary background color
        )

## Animation Description: skeleton-card ::after pseudo-elements

- The ::after pseudo-elements are animated to `transform` or locomote 

    - from: translateX(-100%) 
        - i.e. from outside left of #card-container 

    - to: translateX(100%) 
        - i.e. within the #card-container superposing the parent .skeleton-card.

- The animation triggers every `1s` for **infinity**

        animation: load 1s inifnite;

        @keyframes load {

            from { transform: translateX(-100%); }  
            to { transform: translateX(100%); }  
        }  
