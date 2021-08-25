from django.db import models

class Contato(models.Model):
    id = models.AutoField(primary_key=True)
    nome = models.CharField(max_length=50, help_text="Nome do contato.", unique=True)
    telefone = models.CharField(max_length=20, help_text="Telefone.", unique=True)
    celular = models.CharField(max_length=20, help_text="Celular.", unique=True)

    def __str__(self):
        return self.nome

    class Meta:
        managed = True
        db_table = 'tab_contato'
        verbose_name_plural=u'Contatos'