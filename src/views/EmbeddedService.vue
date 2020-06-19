<template>
    <div style="display: flex; width: 100%; height: 100%; flex-direction: column; overflow: hidden;">
        <iframe frameborder="0" :src="serviceUrl" style="flex-grow: 1; border: none; margin: 0; padding: 0;" />
    </div>
</template>

<script>
export default {
    name: "EmbeddedService",
    props: {
        name: String
    },
    computed: {
        services() {
            return this.$store.getters.services;
        },
        serviceUrl() {
            var service = this.findService();
            console.info(service);
            if(service == null)
                return this.$router.resolve({ name: "Page404" }).href;
            return service.url;
        }
    },
    methods: {
        findService() {
            var service = null;

            //if we don't have the services, nothing to add
            if(this.services != null) {
                for(var i=0;i< this.services.length; i++) {
                    var group = this.services[i];
                    if(group.items !== undefined) {
                        service = group.items.find(s => s.name === this.name);
                        console.info(service);
                        if(service !== null)
                            return service;
                    }
                }
            }
            
            return null;
        }
    }
}
</script>