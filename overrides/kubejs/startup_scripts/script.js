// priority: 0
onEvent('item.registry', event => {
    event.create('handle').maxStackSize(16).group('misc').displayName('Handle')
})