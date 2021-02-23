var app=Vue.createApp({
    data(){
        return {
            searchEngines:{},
            searchEngine:{
                action:"",
                name:""
            },
            cates:{},
            content:{}
        }
    },
    methods:{
        setSearchEngine(click){
            for(let key in this.searchEngines){
                this.searchEngines[key].selected=false
            }
            this.searchEngines[click.target.id].selected=true
            let targetEngine=this.searchEngines[click.target.id]
            this.searchEngine.action=targetEngine.url
            this.searchEngine.name=targetEngine.kw
        },
        setContent(click){
            for(let key in this.cates){
                this.cates[key].selected=false
            }
            this.cates[click.target.id].selected=true
            this.content=this.cates[click.target.id].links
        }
    },
    created(){
        $.ajax({
            url:"/data/data.json",
            dataType:"json",
            success:function(response){
                vm.searchEngines=response.searchEngines
                vm.searchEngine.action=response.searchEngines.baidu.url
                vm.searchEngine.name=response.searchEngines.baidu.kw
                vm.cates=response.cates
                vm.content=response.cates.acg.links
            }
        })
    }
})
var vm=app.mount("div.main")

