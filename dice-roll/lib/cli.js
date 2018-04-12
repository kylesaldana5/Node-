'use strict'

process.title = 'Dice Roll'

const { argv: [, , ...args] } = process
const { count, sides } = require('./parse-args')(args)
const { roll, toDiceNotation } = require('./dice')

console.log('args',args, 'count', count, 'sides', sides );


const dice = toDiceNotation({ count, sides })
const total = roll(dice)

console.log(total)