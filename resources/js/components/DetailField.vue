<template>
    <PanelItem :index="index" :field="field">
        <template v-if="field.value" #value>
            <iframe id="ytplayer" type="text/html" width="100%" height="400" class="rounded"
                    :src="'https://www.youtube.com/embed/' + field.value"
                    frameborder="0"></iframe>
        </template>
    </PanelItem>
</template>

<script>
export default {
  props: ['index', 'resource', 'resourceName', 'resourceId', 'field'],
}
</script>
