import './js/a.js'
import './js/b.js'
import $ from 'jquery'
import './css/index.css'
import './less/index.less'
import imgObj from './imgs/01.jpg'
import './fonts/iconfont.css'

$(function () {
  const $img = $('<img>')
  $img.attr('src', imgObj)
  $(' .heard').append($img)
  $('li:odd').css('color', 'red')
  $('li:even').css('color', 'Skyblue')
  console.log('这是测试的')
})
