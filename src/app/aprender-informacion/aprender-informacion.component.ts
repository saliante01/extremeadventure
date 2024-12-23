import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-aprender-informacion',
  imports: [CommonModule],
  templateUrl: './aprender-informacion.component.html',
  styleUrls: ['./aprender-informacion.component.css']
})
export class AprenderInformacionComponent {
  faqList = [
    {
      question: 'Cabalgata',
      answers: [
        'Manejo básico del caballo: Cómo alimentar al caballo, asearlo (cepillado), y verificar su bienestar.',
        'Respeto por el animal: Entender la importancia de tratar al caballo con respeto y cariño. Esto incluye saber cómo acercarse al caballo, cómo interactuar con él de forma calmada y cómo detectar si el caballo está incómodo o estresado. ',
        'Seguridad y cuidado( nobleza) al caballo:',
        'Uso de casco: Asegúrate de que todos los niños usen casco en todo momento. Explícales la importancia de protegerse la cabeza en caso de caída.',
        'Instrucciones sobre cómo montar y desmontar: Los niños deben aprender a montar y desmontar de forma segura, siempre con la supervisión de un instructor.',
        'Comportamiento en el camino: Enseñar a los niños a mantener una distancia adecuada con otros caballos y a no hacer movimientos bruscos que puedan asustar al animal previa inducción del instructor a las cabalagatas.'
        
      ],
      open: false
    },
    {
      question: 'Kayak: Posición Correcta en el Kayak',
      answers: [
        'Para un control adecuado del kayak y la seguridad del niño, es fundamental que mantengan una postura correcta:',
        'Sentados con la espalda recta: Esto les ayudará a mantener el equilibrio y la postura.',
        'Rodillas flexionadas: Las piernas deben estar ligeramente dobladas para absorber los movimientos del kayak.',
        'Agarre de los remos: El niño debe aprender a sostener el remo con ambas manos, de forma firme pero relajada. Las manos deben estar separadas a una distancia cómoda para no tensarse durante el remo.'
      ],
      open: false
    },
    {
      question: 'Técnicas de Remo Básicas',
      answers: [
        'Remo hacia adelante: El niño debe aprender a sumergir la pala del remo en el agua completamente, usando ambos brazos de manera alternada, y empujar hacia atrás en un movimiento fluido. Este es el movimiento principal para avanzar en el kayak.',
        'Remo de giro (en espiral): Para girar el kayak, el niño debe aprender a utilizar el remo en un ángulo ligeramente inclinado y moverlo de manera más lateral. Este movimiento ayudará a cambiar de dirección sin perder el control.',
        'Remo de frenado (en reversa): Usando el remo de forma opuesta, el niño puede aprender a frenar o retroceder. Para esto, debe poner el remo en el agua cerca de los costados del kayak y moverlo hacia atrás.'
      ],
      open: false
    },
    {
      question: 'Estabilidad y Equilibrio',
      answers: [
        'Los niños deben aprender a mantener el equilibrio en el kayak, especialmente en condiciones de agua más movida. Para esto, es útil practicar en aguas tranquilas y luego progresar hacia condiciones más desafiantes.',
        'Una excelente técnica es la de sentarse en el centro del kayak para mejorar la estabilidad y evitar volcarse fácilmente. También pueden practicar la técnica de balanceo del kayak de lado a lado para sentir cómo responden a los movimientos.',
      ],
      open: false
    },
    {
      question: 'Técnicas de Rescate y Seguridad',
      answers: [
        'Es crucial enseñar a los niños qué hacer en caso de que se caigan o vuelquen:',
        'Caída al agua: Mostrarles cómo regresar al kayak, usando técnicas como “el resorte” (agarrar el kayak y girar para subirse de nuevo).',
        'Uso de chalecos salvavidas: Asegurarse de que siempre lleven un chaleco salvavidas y de que sepan cómo usarlo correctamente.'
      ],
      open: false
    },
    {
      question: 'Sup: Posición Correcta sobre la Tabla',
      answers: [
        'Para comenzar con el SUP, los niños deben aprender a mantener una postura correcta sobre la tabla:',
        'Rodillas ligeramente dobladas: Mantener las piernas flexionadas, lo que les dará mayor estabilidad y control sobre la tabla.',
        'Mirada hacia adelante: En lugar de mirar los pies, deben mirar al frente para mantener el equilibrio y no perder la orientación.',
        'Pies en el centro de la tabla: Para evitar que la tabla se voltee, es importante que los pies estén centrados y alineados. Los pies deben estar al ancho de los hombros.'
      ],
      open: false
    },
    {
      question: 'Técnicas de Remo',
      answers: [
        'Remo de propulsión: El niño debe aprender a sumergir la pala del remo completamente en el agua, usando el peso de su cuerpo para impulsarse hacia adelante, mientras mantiene el brazo extendido.',
        ' Remo lateral para girar: Para cambiar de dirección, el niño debe aprender a remar de un lado de la tabla. Para giros más suaves, se puede usar un solo remo, mientras que para giros más rápidos o ágiles, usar ambos remos es una buena opción.',
        'Remo de frenado: Similar al kayak, cuando el niño quiera frenar o retroceder, debe realizar un movimiento inverso con el remo, manteniéndolo más cerca de la parte trasera de la tabla.'
      ],
      open: false
    },
    {
      question: 'Técnicas de Equilibrio y Estabilidad',
      answers: [
        ' El SUP, al igual que el kayak, requiere mucha concentración en el equilibrio. Los niños pueden comenzar a practicar de rodillas sobre la tabla, para luego ir de pie una vez que se sientan cómodos.',
        ' Para mejorar la estabilidad, los niños deben aprender a distribuir su peso de manera uniforme entre ambos pies y evitar movimientos bruscos.'
      ],
      open: false
    },
    {
      question: 'Técnicas de Seguridad',
      answers: [
        ' Uso del chaleco salvavidas: Es crucial que los niños usen un chaleco salvavidas adecuado y sepan cómo ajustarlo correctamente.',
        ' Caída al agua: En caso de caer, es importante enseñarles cómo caer de manera segura (en posición vertical) y cómo regresar a la tabla.'
      ],
      open: false
    },
    {
      question: 'Beneficios de Aprender Kayak y SUP para Niños',
      answers: [
        ' Desarrollo físico: Ambos deportes trabajan la fuerza del tren superior, los brazos, los hombros y las piernas, promoviendo un entrenamiento completo.',
        ' Mejora del equilibrio: Ambos deportes, especialmente el SUP, son ideales para mejorar el equilibrio y la coordinación.',
        'Autoconfianza: Los niños desarrollan confianza en sí mismos al aprender nuevas habilidades y enfrentarse al desafío de mantenerse en equilibrio o avanzar en el agua.',
        'Conexión con la naturaleza: El kayak y el SUP permiten que los niños se conecten con el entorno natural, desarrollando un mayor respeto por el medio ambiente.',
        'Trabajo en equipo y respeto: Si las actividades se realizan en grupos, los niños aprenden a colaborar, respetar a otros y compartir.'
      ],
      open: false
    },
    
  ];

  toggleAnswer(item: any) {
    item.open = !item.open;
  }
}
