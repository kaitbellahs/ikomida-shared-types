import TBaseType from './TBaseType.js'

export default class TAnimation extends TBaseType {
  static BOUNCE = new TAnimation('bounce')
  static FLASH = new TAnimation('flash')
  static PULSE = new TAnimation('pulse')
  static RUBBER_BAND = new TAnimation('rubberBand')
  static SHAKE_X = new TAnimation('shakeX')
  static SHAKE_Y = new TAnimation('shakeY')
  static HEAD_SHAKE = new TAnimation('headShake')
  static SWING = new TAnimation('swing')
  static TADA = new TAnimation('tada')
  static WOBBLE = new TAnimation('wobble')
  static JELLO = new TAnimation('jello')
  static HEART_BEAT = new TAnimation('heartBeat')
  static BACK_IN_DOWN = new TAnimation('backInDown')
  static BACK_IN_LEFT = new TAnimation('backInLeft')
  static BACK_IN_RIGHT = new TAnimation('backInRight')
  static BACK_IN_UP = new TAnimation('backInUp')
  static BACK_OUT_DOWN = new TAnimation('backOutDown')
  static BACK_OUT_LEFT = new TAnimation('backOutLeft')
  static BACK_OUT_RIGHT = new TAnimation('backOutRight')
  static BACKOUT_UP = new TAnimation('backOutUp')
  static BOUNCE_IN = new TAnimation('bounceIn')
  static BOUNCE_IN_DOWN = new TAnimation('bounceInDown')
  static BOUNCE_IN_LEFT = new TAnimation('bounceInLeft')
  static BOUNCE_IN_RIGHT = new TAnimation('bounceInRight')
  static BOUNCE_IN_UP = new TAnimation('bounceInUp')
  static BOUNCE_OUT = new TAnimation('bounceOut')
  static BOUNCE_OUT_DOWN = new TAnimation('bounceOutDown')
  static BOUNCE_OUT_LEFT = new TAnimation('bounceOutLeft')
  static BOUNCE_OUT_right = new TAnimation('bounceOutRight')
  static BOUNCE_OUT_UP = new TAnimation('bounceOutUp')
  static FADE_IN = new TAnimation('fadeIn')
  static FADE_IN_DOWN = new TAnimation('fadeInDown')
  static FADE_IN_DOWN_BIG = new TAnimation('fadeInDownBig')
  static FADE_IN_LEFT = new TAnimation('fadeInLeft')
  static FADE_IN_LEFT_BIG = new TAnimation('fadeInLeftBig')
  static FADE_IN_RIGHT = new TAnimation('fadeInRight')
  static FADE_IN_RIGHT_BIG = new TAnimation('fadeInRightBig')
  static FADE_IN_UP = new TAnimation('fadeInUp')
  static FADE_IN_UP_BIG = new TAnimation('fadeInUpBig')
  static FADE_IN_TOP_LEFT = new TAnimation('fadeInTopLeft')
  static FADE_IN_TOP_RIGHT = new TAnimation('fadeInTopRight')
  static FADE_IN_BOTTOM_LEFT = new TAnimation('fadeInBottomLeft')
  static FADE_IN_BOTTOM_RIGHT = new TAnimation('fadeInBottomRight')
  static FADE_OUT = new TAnimation('fadeOut')
  static FADE_OUT_DOWN = new TAnimation('fadeOutDown')
  static FADE_OUT_DOWN_BIG = new TAnimation('fadeOutDownBig')
  static FADE_OUT_LEFT = new TAnimation('fadeOutLeft')
  static FADE_OUT_LEFT_BIG = new TAnimation('fadeOutLeftBig')
  static FADE_OUT_RIGHT = new TAnimation('fadeOutRight')
  static FADE_OUT_RIGHT_BIG = new TAnimation('fadeOutRightBig')
  static FADE_OUT_UP = new TAnimation('fadeOutUp')
  static FADE_OUT_UP_BIG = new TAnimation('fadeOutUpBig')
  static FADE_OUT_TOP_LEFT = new TAnimation('fadeOutTopLeft')
  static FADE_OUT_TOP_RIGHT = new TAnimation('fadeOutTopRight')
  static FADE_OUT_BOTTOM_RIGHT = new TAnimation('fadeOutBottomRight')
  static FADE_OUT_BOTTOM_LEFT = new TAnimation('fadeOutBottomLeft')
  static FLIPPERS = new TAnimation('Flippers')
  static FLIP = new TAnimation('flip')
  static FLIP_IN_X = new TAnimation('flipInX')
  static FLIP_IN_Y = new TAnimation('flipInY')
  static FLIP_OUT_X = new TAnimation('flipOutX')
  static FLIP_OUT_Y = new TAnimation('flipOutY')
  static LIGHT_SPEED = new TAnimation('Lightspeed')
  static LIGHT_SPEED_IN_RIGHT = new TAnimation('lightSpeedInRight')
  static LIGHT_SPEED_IN_LEFT = new TAnimation('lightSpeedInLeft')
  static LIGHT_SPEEDOUT_RIGHT = new TAnimation('lightSpeedOutRight')
  static LIGHT_SPEEDOUT_LEFT = new TAnimation('lightSpeedOutLeft')
  static ROTATE_IN = new TAnimation('rotateIn')
  static ROTATE_IN_DOWN_LEFT = new TAnimation('rotateInDownLeft')
  static ROTATE_IN_DOWN_RIGHT = new TAnimation('rotateInDownRight')
  static ROTATE_IN_UP_LEFT = new TAnimation('rotateInUpLeft')
  static ROTATE_IN_UP_RIGHT = new TAnimation('rotateInUpRight')
  static ROTATE_OUT = new TAnimation('rotateOut')
  static ROTATE_OUT_DOWN_LEFT = new TAnimation('rotateOutDownLeft')
  static ROTATE_OUT_DOWN_RIGHT = new TAnimation('rotateOutDownRight')
  static ROTATE_OUT_UP_LEFT = new TAnimation('rotateOutUpLeft')
  static ROTATE_OUT_UP_RIGHT = new TAnimation('rotateOutUpRight')
  static SPECIALS = new TAnimation('Specials')
  static HINGE = new TAnimation('hinge')
  static JACK_IN_THE_BOX = new TAnimation('jackInTheBox')
  static ROLL_IN = new TAnimation('rollIn')
  static ROLL_OUT = new TAnimation('rollOut')
  static ZOOM_IN = new TAnimation('zoomIn')
  static ZOOM_IN_DOWN = new TAnimation('zoomInDown')
  static ZOOM_IN_LEFT = new TAnimation('zoomInLeft')
  static ZOOM_IN_RIGHT = new TAnimation('zoomInRight')
  static ZOOM_IN_UP = new TAnimation('zoomInUp')
  static ZOOM_OUT = new TAnimation('zoomOut')
  static ZOOM_OUT_DOWN = new TAnimation('zoomOutDown')
  static ZOOM_OUT_LEFT = new TAnimation('zoomOutLeft')
  static ZOOM_OUT_RIGHT = new TAnimation('zoomOutRight')
  static SLIDE_IN_DOWN = new TAnimation('slideInDown')
  static SLIDE_IN_LEFT = new TAnimation('slideInLeft')
  static SLIDE_IN_RIGHT = new TAnimation('slideInRight')
  static SLIDE_IN_UP = new TAnimation('slideInUp')
  static SLIDE_OUT_DOWN = new TAnimation('slideOutDown')
  static SLIDE_OUT_LEFT = new TAnimation('slideOutLeft')
  static SLIDE_OUT_RIGHT = new TAnimation('slideOutRight')
  static SLIDE_OUT_UP = new TAnimation('slideOutUp')

  constructor(type: string) {
    super(type)
    switch (type) {
      case 'bounce':
        this.name = 'Pular'
        break
      case 'flash':
        this.name = 'Relâmpago'
        break
      case 'pulse':
        this.name = 'pulsação'
        break
      case 'rubberBand':
        this.name = 'Elástico'
        break
      case 'shakeX':
        this.name = 'Mexe X'
        break
      case 'shakeY':
        this.name = 'Mexe Y'
        break
      case 'headShake':
        this.name = 'Mexe a cabeça'
        break
      case 'swing':
        this.name = 'Troca'
        break
      case 'tada':
        this.name = 'Tada'
        break
      case 'wobble':
        this.name = 'oscilação'
        break
      case 'jello':
        this.name = 'Gelatina'
        break
      case 'heartBeat':
        this.name = 'Batimento cardiaco'
        break
      case 'backInDown':
        this.name = 'Voltar para baixo'
        break
      case 'backInLeft':
        this.name = 'Voltar para esquerda'
        break
      case 'backInRight':
        this.name = 'Voltar para direita'
        break
      case 'backInUp':
        this.name = 'Voltar para cima'
        break
      case 'backOutDown':
        this.name = 'Voltar de baixo'
        break
      case 'backOutLeft':
        this.name = 'Voltar da esquerda'
        break
      case 'backOutRight':
        this.name = 'Voltar da direita'
        break
      case 'backOutUp':
        this.name = 'Voltar de cima'
        break
      case 'bounceIn':
        this.name = 'Pular dentro'
        break
      case 'bounceInDown':
        this.name = 'Saltar para baixo'
        break
      case 'bounceInLeft':
        this.name = 'Saltar para esquerda'
        break
      case 'bounceInRight':
        this.name = 'Saltar para direita'
        break
      case 'bounceInUp':
        this.name = 'Saltar para cima'
        break
      case 'bounceOut':
        this.name = 'Pular fora'
        break
      case 'bounceOutDown':
        this.name = 'Saltar de baixo'
        break
      case 'bounceOutLeft':
        this.name = 'Saltar de esquerda'
        break
      case 'bounceOutRight':
        this.name = 'Saltar de direita'
        break
      case 'bounceOutUp':
        this.name = 'Saltar de cima'
        break
      case 'fadeIn':
        this.name = 'Aparecimento gradual'
        break
      case 'fadeInDown':
        this.name = 'Aparecimento gradual para baixo'
        break
      case 'fadeInDownBig':
        this.name = 'Aparecimento gradual para baixo grande'
        break
      case 'fadeInLeft':
        this.name = 'Aparecimento gradual para esquerda'
        break
      case 'fadeInLeftBig':
        this.name = 'Aparecimento gradual para esquerda grande'
        break
      case 'fadeInRight':
        this.name = 'Aparecimento gradual para direita'
        break
      case 'fadeInRightBig':
        this.name = 'Aparecimento gradual para direita grande'
        break
      case 'fadeInUp':
        this.name = 'Aparecimento gradual para cima'
        break
      case 'fadeInUpBig':
        this.name = 'Aparecimento gradual para cima grande'
        break
      case 'fadeInTopLeft':
        this.name = 'Aparecimento gradual para cima/esquerda'
        break
      case 'fadeInTopRight':
        this.name = 'Aparecimento gradual para cima/direita'
        break
      case 'fadeInBottomLeft':
        this.name = 'Aparecimento gradual para baixo/esquerda'
        break
      case 'fadeInBottomRight':
        this.name = 'Aparecimento gradual para baixo/direita'
        break
      case 'fadeOut':
        this.name = 'Desaparecimento gradual'
        break
      case 'fadeOutDown':
        this.name = 'Desaparecimento gradual para baixo'
        break
      case 'fadeOutDownBig':
        this.name = 'Desaparecimento gradual para baixo grande'
        break
      case 'fadeOutLeft':
        this.name = 'Desaparecimento gradual para esquerda'
        break
      case 'fadeOutLeftBig':
        this.name = 'Desaparecimento gradual para esquerda grande'
        break
      case 'fadeOutRight':
        this.name = 'Desaparecimento gradual para direita'
        break
      case 'fadeOutRightBig':
        this.name = 'Desaparecimento gradual para direita grande'
        break
      case 'fadeOutUp':
        this.name = 'Desaparecimento gradual para cima'
        break
      case 'fadeOutUpBig':
        this.name = 'Desaparecimento gradual para cima grande'
        break
      case 'fadeOutTopLeft':
        this.name = 'Desaparecimento gradual para cima/esquerda'
        break
      case 'fadeOutTopRight':
        this.name = 'Desaparecimento gradual para cima/direita'
        break
      case 'fadeOutBottomLeft':
        this.name = 'Desaparecimento gradual para baixo/esquerda'
        break
      case 'fadeOutBottomRight':
        this.name = 'Desaparecimento gradual para baixo/direita'
        break
      case 'Flippers':
        this.name = 'Nadadeira'
        break
      case 'flip':
        this.name = 'Virar'
        break
      case 'flipInX':
        this.name = 'Virar em X'
        break
      case 'flipInY':
        this.name = 'Virar em Y'
        break
      case 'flipOutX':
        this.name = 'Vire para fora X'
        break
      case 'flipOutY':
        this.name = 'Vire para fora Y'
        break
      case 'Lightspeed':
        this.name = 'Velocidade da luz'
        break
      case 'lightSpeedInRight':
        this.name = 'Velocidade da luz à direita'
        break
      case 'lightSpeedInLeft':
        this.name = 'Velocidade da luz à esquerda'
        break
      case 'lightSpeedOutRight':
        this.name = 'Velocidade da luz de direita'
        break
      case 'lightSpeedOutLeft':
        this.name = 'Velocidade da luz de esquerda'
        break
      case 'rotateIn':
        this.name = 'Girar para dentro'
        break
      case 'rotateInDownLeft':
        this.name = 'Girar para dentro baixo/esquerda'
        break
      case 'rotateInDownRight':
        this.name = 'Girar para dentro baixo/direita'
        break
      case 'rotateInUpLeft':
        this.name = 'Girar para dentro cima/esquerda'
        break
      case 'rotateInUpRight':
        this.name = 'Girar para dentro cima/direita'
        break
      case 'rotateOut':
        this.name = 'Girar para fora'
        break
      case 'rotateOutDownLeft':
        this.name = 'Girar para fora baixo/esquerda'
        break
      case 'rotateOutDownRight':
        this.name = 'Girar para fora baixo/direita'
        break
      case 'rotateOutUpLeft':
        this.name = 'Girar para fora cima/esquerda'
        break
      case 'rotateOutUpRight':
        this.name = 'Girar para fora cima/direita'
        break
      case 'Specials':
        this.name = 'Especiais'
        break
      case 'hinge':
        this.name = 'Dobradiça'
        break
      case 'jackInTheBox':
        this.name = 'Jack na caixa'
        break
      case 'rollIn':
        this.name = 'Rolar'
        break
      case 'rollOut':
        this.name = 'Sair'
        break
      case 'zoomIn':
        this.name = 'Zoom +'
        break
      case 'zoomInDown':
        this.name = 'Zoom +/baixo'
        break
      case 'zoomInLeft':
        this.name = 'Zoom +/esquerda'
        break
      case 'zoomInRight':
        this.name = 'Zoom +/direita'
        break
      case 'zoomInUp':
        this.name = 'Zoom +/cima'
        break
      case 'zoomOut':
        this.name = 'Zoom -'
        break
      case 'zoomOutDown':
        this.name = 'Zoom -/baixo'
        break
      case 'zoomOutLeft':
        this.name = 'Zoom -/esquerda'
        break
      case 'zoomOutRight':
        this.name = 'Zoom -/direita'
        break
      case 'zoomOutUp':
        this.name = 'Zoom -/cima'
        break
      case 'slideInDown':
        this.name = 'Deslizar para baixo'
        break
      case 'slideInLeft':
        this.name = 'Deslizar para esquerda'
        break
      case 'slideInRight':
        this.name = 'Deslizar para direita'
        break
      case 'slideInUp':
        this.name = 'Deslizar para cima'
        break
      case 'slideOutDown':
        this.name = 'Deslizar de baixo'
        break
      case 'slideOutLeft':
        this.name = 'Deslizar de esquerda'
        break
      case 'slideOutRight':
        this.name = 'Deslizar de direita'
        break
      case 'slideOutUp':
        this.name = 'Deslizar de cima'
        break
      default:
        this.name = ''
        break
    }
  }
}
