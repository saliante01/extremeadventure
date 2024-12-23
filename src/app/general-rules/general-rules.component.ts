import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-general-rules',
  imports: [CommonModule],
  templateUrl: './general-rules.component.html',
  styleUrl: './general-rules.component.css'
})
export class GeneralRulesComponent {
  faqList = [
    {
      question: 'Respeto Mutuo',
      answers: [
        'Respeto a los demás: Todos deben tratar a sus compañeros, instructores y personal con amabilidad y respeto en todo momento. No se tolerarán actitudes agresivas, burlas ni discriminación.',
        'Escuchar a los instructores: Durante las actividades, los niños y adolescentes deben escuchar y seguir las instrucciones de los monitores o responsables de cada actividad.',
        'Cuidar los espacios comunes: Todos deben mantener el orden y cuidar las instalaciones, el material y los equipos proporcionados.',
      ],
      open: false
    },
    {
      question: 'Seguridad',
      answers: [
        'Uso obligatorio del equipo de seguridad: En todas las actividades acuáticas (kayak, SUP, natación) o deportivas (ciclismo, etc.), se deberá usar el equipo de seguridad correspondiente, como chalecos salvavidas, cascos y rodilleras.',
        'Normas de seguridad en el agua: Los niños y adolescentes solo podrán entrar al agua cuando estén acompañados por un monitor. No deben correr ni empujarse en la zona acuática.',
        'Comportamiento seguro: Se debe mantener un comportamiento seguro en todas las actividades, evitando correr, saltar desde alturas sin permiso o realizar actividades peligrosas.',
      ],
      open: false
    },
    {
      question: 'Puntualidad',
      answers: [
        'Llegar a tiempo: Los niños y adolescentes deben llegar puntualmente al inicio de cada actividad o sesión. Esto es importante para garantizar que las actividades se realicen de manera eficiente y para no interrumpir el flujo de las mismas.',
        'Respeto por los horarios: Las actividades y descansos tienen horarios específicos que deben respetarse. Si algún niño o adolescente no puede asistir a una actividad, debe informar previamente a un adulto responsable.',
      ],
      open: false
    },
    {
      question: 'Comportamiento en Grupo',
      answers: [
        'Trabajo en equipo: Durante las actividades grupales, los niños deben colaborar, ayudarse mutuamente y ser solidarios. El trabajo en equipo es esencial para que todos puedan disfrutar y aprender de manera equitativa.',
        'Sin peleas ni discusiones: En caso de desacuerdos, los niños deben resolver sus problemas de manera tranquila, sin recurrir a peleas o actitudes violentas. Si hay algún conflicto, deben comunicarlo a un adulto para solucionarlo de forma adecuada.',
      ],
      open: false
    },
    {
      question: 'Higiene y Cuidado Personal',
      answers: [
        'Mantener la higiene personal: Es importante que los niños se mantengan limpios y cuiden su higiene personal, especialmente en actividades acuáticas y deportivas.',
        'Uso adecuado de los baños y vestuarios: Los baños y vestuarios deben usarse de manera ordenada y respetuosa, sin dejar objetos personales fuera de lugar.',
        'Ropa apropiada: Los niños deben usar ropa adecuada para cada actividad (ropa deportiva, ropa de baño, protector solar, etc.).',
      ],
      open: false
    },
    {
      question: 'Comportamiento Durante las Comidas (Días de Campamentos)',
      answers: [
        'Comer en el lugar indicado: Durante el almuerzo o las meriendas, los niños deben permanecer en el área asignada y comer sin interrumpir a los demás.',
        'No dejar basura: Es importante mantener los lugares limpios, por lo que deben tirar la basura en los lugares adecuados y no dejar desechos en el suelo.',
        'Comer de forma respetuosa: Los niños deben comer tranquilamente y no hacer ruidos molestos ni jugar con la comida.',
      ],
      open: false
    },
    {
      question: 'Uso de Dispositivos Electrónicos',
      answers: [
        'Uso limitado de dispositivos electrónicos: En la escuela de verano, se fomentan las interacciones sociales y la participación activa. Por lo tanto, se recomienda que los niños y adolescentes usen dispositivos electrónicos solo en momentos de descanso y bajo la supervisión de los monitores. No se permite el uso de celulares o dispositivos durante las actividades.',
        'No grabar sin permiso: Está prohibido grabar a otros niños o monitores sin su consentimiento previo.',
      ],
      open: false
    },
    {
      question: 'Asistencia y Permisos Especiales',
      answers: [
        'Asistencia diaria: Los niños y adolescentes deben asistir a todas las actividades programadas, salvo por motivos de salud justificados (enfermedades o citas médicas previas).',
        'Permisos de salida: Si un niño o adolescente necesita salir antes de la hora de finalización de la jornada, debe presentar una nota firmada por sus padres o tutores.',
      ],
      open: false
    },
  ];

  toggleAnswer(item: any) {
    item.open = !item.open;
  }

}
