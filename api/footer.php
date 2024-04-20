<?php
/**
 * Template Name: Footer
 * @package liontheme
 * @source project-lion
 * 
**/ 
?>

    <div class="position-absolute w-100 top-0 overflow-hidden" style="height: 7392px;">
        <?php for ($i=0; $i < 25; $i++) : ?>
            <div class="particle particle__<?= $i; ?>"></div>
        <?php endfor; ?>
    </div>

    <!-- Scripts Theme 
    ============================================ -->
    <script src="<?= $url; ?>/js/theme.js"></script>
    <script src="<?= $url; ?>/js/plugins.js"></script>

</div>
<!-- End Wrapper  -->

</body>
</html>